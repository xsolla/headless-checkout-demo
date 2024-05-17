import { CreditCardForm } from '../credit-card-form';
import { DefaultForm } from '../credit-card-form/default-form';
import { forwardRef } from 'react';
import { Field } from '@xsolla/pay-station-sdk/dist/core/form/field.interface';
import { SubmitButton } from '../submit-button';
import { FormError } from '../form-error';

export const FormContainer = forwardRef<
  HTMLDivElement,
  {
    isCreditCardForm: boolean;
    isSecondStep: boolean;
    visibleFields: Field[] | null;
    isSubmitButtonVisible: boolean;
    submitButtonText: string;
    formError: string | null;
    canBeMounted: boolean;
  }
>(
  (
    {
      isCreditCardForm,
      isSecondStep,
      visibleFields,
      isSubmitButtonVisible,
      submitButtonText,
      formError,
      canBeMounted,
    },
    ref,
  ) => {
    return (
      <>
        <div className={'form-messages'}>
          <psdk-payment-form-messages></psdk-payment-form-messages>
        </div>
        {!!visibleFields && canBeMounted && (
          <>
            <div className={'form'} ref={ref}>
              {isCreditCardForm && <CreditCardForm isShortForm={!isSecondStep} />}
              <DefaultForm
                visibleFields={visibleFields}
                isCreditCardForm={isCreditCardForm}
                isShortForm={!isSecondStep}
              />
              {formError && <FormError error={formError} className={'form-error'} />}
            </div>
            {isSubmitButtonVisible && (
              <SubmitButton text={submitButtonText} className={'submit-button'} />
            )}
          </>
        )}
      </>
    );
  },
);

FormContainer.displayName = 'FormContainer';
