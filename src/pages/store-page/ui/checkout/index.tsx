import { useAppDispatch, useAppSelector } from '../../../../redux/hooks.ts';
import { resetSecondStep, selectPaymentFormSettings } from '../../../../redux/payment-form';
import { useSecureComponentStyles } from '../../hooks/checkout/use-secure-styles.ts';
import { FormSkeleton } from './form-skeleton';
import { StyledCheckoutContainer } from '../../styled/checkout/checkout.styles.ts';
import { useHandleForm } from '../../hooks/checkout/use-handle-form.ts';
import { BackButton } from './back-button';
import { FormContainer } from './form-container';
import { useEffect, useRef } from 'react';
import { selectPaymentNextPage } from '../../../../redux/payment-navigation';
import { Routes } from '../../../../routes/routes.enum.ts';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const Checkout = () => {
  const dispatch = useAppDispatch();
  const {
    pid,
    visibleFields,
    isSecondStep,
    isSubmitButtonVisible,
    submitButtonText,
    formError,
    canBeMounted,
  } = useAppSelector(selectPaymentFormSettings);
  useSecureComponentStyles();
  const formContainerRef = useRef<HTMLDivElement>(null);
  const { isLoading, setIsLoading } = useHandleForm(formContainerRef);
  const nextPaymentPage = useAppSelector(selectPaymentNextPage);

  const showBackButton = isSecondStep && !isLoading;
  const handleBackButtonClick = () => {
    dispatch(resetSecondStep());
    setIsLoading(true);
  };
  const navigate = useNavigate();
  const [params] = useSearchParams();
  useEffect(() => {
    if (nextPaymentPage) {
      navigate({ pathname: `/${Routes.storePage}/${nextPaymentPage}`, search: params.toString() });
    }
  }, [nextPaymentPage]);

  return (
    <StyledCheckoutContainer $isLoading={isLoading} $isSecondStep={isSecondStep}>
      {showBackButton && <BackButton onClick={handleBackButtonClick} className={'back-button'} />}
      {isLoading && <FormSkeleton />}
      <FormContainer
        pid={pid}
        isSecondStep={isSecondStep}
        visibleFields={visibleFields}
        ref={formContainerRef}
        isSubmitButtonVisible={isSubmitButtonVisible}
        submitButtonText={submitButtonText}
        formError={formError}
        canBeMounted={canBeMounted}
      />
    </StyledCheckoutContainer>
  );
};
