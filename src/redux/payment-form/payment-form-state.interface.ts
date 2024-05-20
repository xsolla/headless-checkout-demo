import { Field } from '@xsolla/pay-station-sdk/dist/core/form/field.interface';

export interface PaymentFormState {
  fields: Field[] | null;
  visibleFields: Field[] | null;
  pid: number | null;
  isFetching: boolean;
  isFormAutoSubmitted: boolean;
  submitButtonText: string;
  isSecondStep: boolean;
  isSubmitButtonVisible: boolean;
  formError: string | null;
  canBeMounted: boolean;
}
