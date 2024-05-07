import { payStationSdkApiClient } from '../pay-station-sdk-client.ts';
import { FinanceDetails } from '@xsolla/pay-station-sdk';

export const listenFinanceDetails = async (
  cb: (financeDetails: FinanceDetails) => void,
): Promise<void> => {
  payStationSdkApiClient.onUpdateFinanceDetails(cb);
};
