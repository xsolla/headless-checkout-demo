import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { addItem, removeItem } from './index';
import { createToken } from '../sdk-configuration';

const updateCartMiddleware = createListenerMiddleware();

updateCartMiddleware.startListening({
  matcher: isAnyOf(addItem, removeItem),
  effect: async (_, listenerApi) => {
    await listenerApi.dispatch(createToken());
  },
});

export default updateCartMiddleware;
