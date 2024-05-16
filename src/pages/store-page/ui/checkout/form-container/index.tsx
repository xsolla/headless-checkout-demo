import { CreditCardForm } from '../credit-card-form';
import { DefaultForm } from '../credit-card-form/default-form';
import { forwardRef } from 'react';
import { Field } from '@xsolla/pay-station-sdk/dist/core/form/field.interface';
import { SubmitButton } from '../submit-button';

export const FormContainer = forwardRef<
  HTMLDivElement,
  {
    isCreditCardForm: boolean;
    isSecondStep: boolean;
    visibleFields: Field[];
    className: string;
    isSubmitButtonVisible: boolean;
    submitButtonText: string;
  }
>(
  (
    {
      isCreditCardForm,
      isSecondStep,
      visibleFields,
      className,
      isSubmitButtonVisible,
      submitButtonText,
    },
    ref,
  ) => {
    return (
      <>
        <div className={className} ref={ref}>
          {isCreditCardForm && <CreditCardForm isShortForm={!isSecondStep} />}
          <DefaultForm
            visibleFields={visibleFields}
            isCreditCardForm={isCreditCardForm}
            isShortForm={!isSecondStep}
          />
        </div>
        {isSubmitButtonVisible && (
          <SubmitButton text={submitButtonText} className={'submit-button'} />
        )}
      </>
    );
  },
);

FormContainer.displayName = 'FormContainer';
