import { Field } from '@xsolla/pay-station-sdk/dist/core/form/field.interface';

export interface PaymentFormState {
  fields: Field[] | null;
  isFetching: boolean;
}
