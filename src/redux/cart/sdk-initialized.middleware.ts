import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { selectSdkInitStatus, setSdkInitialized } from '../paystation-sdk-initialization';
import { listenFinanceDetails } from '../../sdk/finance-details';
import { updateCartItemsPrices } from './index.ts';

const setSdkInitializedMiddleware = createListenerMiddleware();

setSdkInitializedMiddleware.startListening({
  matcher: isAnyOf(setSdkInitialized),
  effect: async (_, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    const sdkIsInitialized = selectSdkInitStatus(state);

    if (sdkIsInitialized) {
      void listenFinanceDetails((res) => {
        listenerApi.dispatch(updateCartItemsPrices(res));
      });
    }
  },
});

export default setSdkInitializedMiddleware;
