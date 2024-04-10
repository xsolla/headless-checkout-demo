import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { selectToken, setToken } from './index.ts';
import { setTokenPayStationSdk } from '../../sdk/initialization';
import { RootState } from '../store.ts';
import { selectSdkIsInitializing } from '../paystation-sdk-initialization';

const setTokenMiddleware = createListenerMiddleware();

setTokenMiddleware.startListening({
  matcher: isAnyOf(setToken),
  effect: async (_, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    const token = selectToken(state);
    const sdkIsInitialized = selectSdkIsInitializing(state);
    if (token && sdkIsInitialized) {
      await setTokenPayStationSdk(token);
    }
  },
});

export default setTokenMiddleware;
