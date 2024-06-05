import { RefObject, useEffect, useState } from 'react';
import {
  getPaymentForm,
  hideSubmitButton,
  selectPaymentFormSettings,
  selectPid,
  setFormCanBeMounted,
  setFormError,
  setPaymentForm,
} from '../../../../redux/payment-form';
import { setupAndAwaitFieldsLoading } from '../../../../sdk/payment-form';
import {
  GooglePayButtonComponent,
  NextActionType,
  ThreeDsComponent,
} from '@xsolla/pay-station-sdk';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks.ts';
import { ShowFieldsAction } from '@xsolla/pay-station-sdk/dist/core/actions/show-fields.action.type';
import { ThreeDsAction } from '@xsolla/pay-station-sdk/dist/core/actions/three-ds/three-ds.action.type';
import { RedirectAction } from '@xsolla/pay-station-sdk/dist/core/actions/redirect/redirect.action.type';
import { SpecialButtonAction } from '@xsolla/pay-station-sdk/dist/core/actions/special-button.action.type';
import { ShowQrCodeAction } from '@xsolla/pay-station-sdk/dist/core/actions/show-qr-code.action.type';
import { StorePageRoutes } from '../../../../routes/store-page/store-page-routes.enum.ts';
import { setNextPage } from '../../../../redux/payment-navigation';
import { ShowErrorsAction } from '@xsolla/pay-station-sdk/dist/core/actions/show-errors.action.type';
import { ShowMobilePaymentScreenAction } from '@xsolla/pay-station-sdk/dist/core/actions/show-mobile-payment-screen.action.type';
import { selectPaymentFormNextAction } from '../../../../redux/payment-form-next-action';
import { applePayId } from '../../../../shared/payment/payment-methods-ids.const.ts';

export const useHandleForm = (formContainerRef: RefObject<HTMLDivElement | null>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const pid = useAppSelector(selectPid);
  const { fields, isSecondStep } = useAppSelector(selectPaymentFormSettings);

  const nextAction = useAppSelector(selectPaymentFormNextAction);

  useEffect(() => {
    if (nextAction) {
      switch (nextAction.type) {
        case NextActionType.showFields:
          handleShowErrorsAction(nextAction as unknown as ShowErrorsAction);
          handleShowFields(nextAction);
          break;
        case NextActionType.showErrors:
          handleShowErrorsAction(nextAction);
          break;
        case NextActionType.threeDS:
          handleThreeDSAction(nextAction);
          break;
        case NextActionType.redirect:
          handleRedirectAction(nextAction);
          break;
        case NextActionType.specialButton:
          handleSpecialButton(nextAction);
          break;
        case NextActionType.showQrCode:
          handleQrCodeAction(nextAction);
          break;
        case NextActionType.checkStatus:
          handleCheckStatusAction();
          break;
        case NextActionType.showMobilePaymentScreen:
          handleShowMobilePaymentScreenAction(nextAction);
          break;
        case NextActionType.hideForm:
          hideForm();
          break;
        default:
          break;
      }
    }
  }, [nextAction]);

  useEffect(() => {
    if (pid && !isSecondStep) {
      dispatch(getPaymentForm({ pid }));
    }
  }, [isSecondStep]);

  useEffect(() => {
    if (fields) {
      setupAndAwaitFieldsLoading(fields).then(() => {
        setIsLoading(false);
      });
    }
  }, [fields]);

  const handleShowFields = (nextAction: ShowFieldsAction) => {
    const error = nextAction.data.errors?.[0].message;

    setIsLoading(true);

    dispatch(setFormCanBeMounted(false));

    setTimeout(() => {
      dispatch(
        setPaymentForm({
          fields: nextAction.data.fields,
          isFormAutoSubmitted: false,
          submitButtonText: '',
          isSecondStep: !error,
        }),
      );

      if (nextAction.data.errors?.length && pid === applePayId) {
        dispatch(hideSubmitButton());
      }
    });
  };

  const handleShowErrorsAction = (nextAction: ShowErrorsAction) => {
    const error = nextAction.data.errors?.[0].message;

    dispatch(setFormError(error ?? null));
  };

  const handleThreeDSAction = (nextAction: ThreeDsAction) => {
    const threeDsComponent = new ThreeDsComponent();

    threeDsComponent.setAttribute('data-challenge', JSON.stringify(nextAction.data.data));

    formContainerRef.current?.appendChild(threeDsComponent);
  };

  const handleRedirectAction = (redirectAction: RedirectAction) => {
    const url = new URL(redirectAction.data.redirect.redirectUrl);
    const params = Object.entries(redirectAction.data.redirect.data);
    params.forEach((entry) => {
      const [key, value] = entry;
      url.searchParams.append(key, value);
    });

    window.location.href = url.toString();
  };

  const handleSpecialButton = (specialButtonAction: SpecialButtonAction) => {
    setTimeout(() => {
      if (!formContainerRef.current) {
        return;
      }

      formContainerRef.current.innerHTML = '';
      if (specialButtonAction.data.buttonName === 'google-pay') {
        const button = new GooglePayButtonComponent();
        button.setButtonColor('white');
        formContainerRef.current.appendChild(button);
        dispatch(hideSubmitButton());
      }
    });
  };

  const handleQrCodeAction = (qrCodeAction: ShowQrCodeAction) => {
    dispatch(
      setPaymentForm({
        fields: qrCodeAction.data.fields,
        isFormAutoSubmitted: false,
        submitButtonText: qrCodeAction.data.submitButtonText,
        isSecondStep: true,
      }),
    );
  };

  const handleShowMobilePaymentScreenAction = (nextAction: ShowMobilePaymentScreenAction) => {
    dispatch(
      setPaymentForm({
        fields: null,
        isFormAutoSubmitted: false,
        submitButtonText: nextAction.data.submitButtonText,
        isSecondStep: true,
      }),
    );
  };

  const handleCheckStatusAction = () => {
    setIsLoading(true);
    dispatch(setNextPage(StorePageRoutes.status));
  };

  const hideForm = () => {
    if (!formContainerRef.current) {
      return;
    }

    formContainerRef.current.style.display = 'none';
  };

  return { isLoading, setIsLoading };
};
