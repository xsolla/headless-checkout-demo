import { payStationSdkApiClient } from '../pay-station-sdk-client.ts';
import { SdkInitConfig } from '../../redux/paystation-sdk-initialization/sdk-init-config.interface.ts';

export const initHeadlessCheckoutLib = (parameters: SdkInitConfig): Promise<void> => {
  return payStationSdkApiClient.init(parameters);
};

export const setTokenHeadlessCheckoutLib = (token: string): Promise<void> => {
  return payStationSdkApiClient.setToken(token);
};
