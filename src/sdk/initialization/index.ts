import { payStationSdkApiClient } from '../pay-station-sdk-client.ts';
import { InitialOptions } from '@xsolla/pay-station-sdk';

export const initHeadlessCheckoutLib = (parameters: InitialOptions): Promise<void> => {
  return payStationSdkApiClient.init(parameters);
};

export const setTokenHeadlessCheckoutLib = (token: string): Promise<void> => {
  return payStationSdkApiClient.setToken(token);
};
