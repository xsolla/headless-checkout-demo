import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { setNextAction } from './index.ts';
import { setPid } from '../payment-form';

const resetNextActionMiddleware = createListenerMiddleware();

resetNextActionMiddleware.startListening({
  matcher: isAnyOf(setPid),
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(setNextAction(null));
  },
});

export default resetNextActionMiddleware;
