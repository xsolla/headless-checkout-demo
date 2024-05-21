import { payStationSdkApiClient } from '../pay-station-sdk-client.ts';
import { Status } from '@xsolla/pay-station-sdk/dist/core/status/status.interface';

export const getPaymentStatusPayStationSdk = async (): Promise<Status> => {
  return await payStationSdkApiClient.getStatus();
};
