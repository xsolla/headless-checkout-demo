import { configureStore } from '@reduxjs/toolkit';
import token from './token';
import sandbox from './sandbox';
import pid from './pid';
import paymentForm from './payment-form';
import sdkInitSlice from './paystation-sdk-initialization';
import setTokenMiddleware from './token/set-token.middleware.ts';

export const store = configureStore({
  reducer: {
    token,
    sandbox,
    pid,
    paymentForm,
    sdkInitializing: sdkInitSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(setTokenMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
