import { PaymentMethod } from '@xsolla/pay-station-sdk/dist/core/payment-method.interface';

export interface PaymentMethodsState {
  paymentMethods: null | PaymentMethod[];
  isFetching: boolean;
}
