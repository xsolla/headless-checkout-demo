import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { selectCurrentLanguage, selectToken, setToken } from './index.ts';
import { RootState } from '../store.ts';
import { initPayStationSdk, selectSdkInitStatus } from '../paystation-sdk-initialization';
import { setTokenPayStationSdk } from '../paystation-sdk-set-token';
import { resetPaymentForm } from '../payment-form';

const setTokenMiddleware = createListenerMiddleware();

setTokenMiddleware.startListening({
  matcher: isAnyOf(setToken),
  effect: async (_, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    const token = selectToken(state);
    const language = selectCurrentLanguage(state);
    const sdkIsInitialized = selectSdkInitStatus(state);

    listenerApi.dispatch(resetPaymentForm());

    if (!sdkIsInitialized) {
      await listenerApi.dispatch(
        initPayStationSdk({
          language,
        }),
      );
    }

    if (token) {
      listenerApi.dispatch(setTokenPayStationSdk({ token }));
    }
  },
});

export default setTokenMiddleware;
