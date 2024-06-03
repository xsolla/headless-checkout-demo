import { payStationSdkApiClient } from '../pay-station-sdk-client.ts';
import { PaymentMethod } from '@xsolla/pay-station-sdk/dist/core/payment-method.interface';

export const getPaymentMethodsPayStationSdk = async (): Promise<PaymentMethod[]> => {
  const allMethodsRaw = await Promise.all([
    payStationSdkApiClient.getQuickMethods(),
    payStationSdkApiClient.getRegularMethods(),
  ]);

  const [quickMethods, regularMethods] = allMethodsRaw;
  return [...quickMethods, ...regularMethods];
};
