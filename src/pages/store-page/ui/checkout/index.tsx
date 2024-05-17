import { useAppDispatch, useAppSelector } from '../../../../redux/hooks.ts';
import { resetSecondStep, selectPaymentFormSettings } from '../../../../redux/payment-form';
import { useSecureComponentStyles } from '../../hooks/checkout/use-secure-styles.ts';
import { FormSkeleton } from './form-skeleton';
import { StyledCheckoutContainer } from '../../styled/checkout.styles.ts';
import { useHandleForm } from '../../hooks/checkout/use-handle-form.ts';
import { BackButton } from './back-button';
import { FormContainer } from './form-container';
import { useRef } from 'react';

export const Checkout = () => {
  const dispatch = useAppDispatch();
  const {
    visibleFields,
    isSecondStep,
    isCreditCardForm,
    isSubmitButtonVisible,
    submitButtonText,
    formError,
    canBeMounted,
  } = useAppSelector(selectPaymentFormSettings);
  useSecureComponentStyles();
  const formContainerRef = useRef<HTMLDivElement>(null);
  const { isLoading, setIsLoading } = useHandleForm(formContainerRef);

  const showBackButton = isSecondStep && !isLoading;
  const handleBackButtonClick = () => {
    dispatch(resetSecondStep());
    setIsLoading(true);
  };

  return (
    <StyledCheckoutContainer $isLoading={isLoading} $isSecondStep={isSecondStep}>
      {showBackButton && <BackButton onClick={handleBackButtonClick} className={'back-button'} />}
      {isLoading && <FormSkeleton />}
      <FormContainer
        isCreditCardForm={isCreditCardForm}
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
