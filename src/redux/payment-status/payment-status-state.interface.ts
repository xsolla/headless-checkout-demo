import { PaymentStatusStates } from './payment-status-states.enum.ts';

export interface PaymentStatusState {
  statusState: null | PaymentStatusStates;
  isFetching: boolean;
}
