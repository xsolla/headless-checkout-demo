import { payStationSdkApiClient } from '../pay-station-sdk-client.ts';
import { PaymentMethod } from '@xsolla/pay-station-sdk/dist/core/payment-method.interface';

export const getPaymentMethodsPayStationSdk = async (): Promise<PaymentMethod[]> => {
  return await payStationSdkApiClient.getRegularMethods();
};
