import { Status } from '@xsolla/pay-station-sdk/dist/core/status/status.interface';
import { PaymentStatusStates } from './payment-status-states.enum.ts';
import { StatusEnum } from '@xsolla/pay-station-sdk';

export const getPaymentStatusState = (statusFromSdk: Status): PaymentStatusStates => {
  if (
    statusFromSdk.isCanceled ||
    statusFromSdk.isCancelUser ||
    statusFromSdk.statusState === StatusEnum.error ||
    statusFromSdk.statusState === StatusEnum.canceled
  ) {
    return PaymentStatusStates.failed;
  }

  if (statusFromSdk.isSuccess) {
    return PaymentStatusStates.success;
  }
  return PaymentStatusStates.processing;
};
