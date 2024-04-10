import { payStationSdkApiClient } from '../pay-station-sdk-client.ts';
import { SdkInitConfig } from '../../redux/paystation-sdk-initialization/sdk-init-config.interface.ts';

export const initPayStationSdkLib = (parameters: SdkInitConfig): Promise<void> => {
  return payStationSdkApiClient.init(parameters);
};

export const setTokenPayStationSdk = (token: string): Promise<void> => {
  return payStationSdkApiClient.setToken(token);
};
