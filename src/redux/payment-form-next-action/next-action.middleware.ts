import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { selectPaymentFormNextActionInit, setNextAction, setNextActionInit } from './index.ts';
import { RootState } from '../store.ts';
import { selectSdkInitStatus, setSdkInitialized } from '../paystation-sdk-initialization';
import { onNextAction } from '../../sdk/payment-form';
import { NextAction } from '@xsolla/pay-station-sdk/dist/core/actions/next-action.interface';

const nextActionMiddleware = createListenerMiddleware();

nextActionMiddleware.startListening({
  matcher: isAnyOf(setSdkInitialized),
  effect: async (_, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    const sdkIsInitialized = selectSdkInitStatus(state);
    const paymentFormNextActionInit = selectPaymentFormNextActionInit(state);

    if (sdkIsInitialized && !paymentFormNextActionInit) {
      onNextAction((nextAction: NextAction) => {
        listenerApi.dispatch(setNextAction(nextAction));
      });
      listenerApi.dispatch(setNextActionInit());
    }
  },
});

export default nextActionMiddleware;
