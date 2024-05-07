import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { selectCurrentLanguage, selectToken, setToken } from './index.ts';
import { RootState } from '../store.ts';
import { initPayStationSdk, selectSdkInitStatus } from '../paystation-sdk-initialization';
import { setTokenPayStationSdk } from '../paystation-sdk-set-token';

const setTokenMiddleware = createListenerMiddleware();

setTokenMiddleware.startListening({
  matcher: isAnyOf(setToken),
  effect: async (_, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    const token = selectToken(state);
    const language = selectCurrentLanguage(state);
    const sdkIsInitialized = selectSdkInitStatus(state);

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
