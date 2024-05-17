import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { addItem, removeItem } from './index';
import { createToken } from '../sdk-configuration';
import { setSdkTokenIsSet } from '../paystation-sdk-set-token';

const updateCartMiddleware = createListenerMiddleware();

updateCartMiddleware.startListening({
  matcher: isAnyOf(addItem, removeItem),
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(setSdkTokenIsSet(false));
    await listenerApi.dispatch(createToken());
  },
});

export default updateCartMiddleware;
