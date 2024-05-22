import { configureStore } from '@reduxjs/toolkit';
import sdkConfigurationSlice from './sdk-configuration';
import paymentFormSlice from './payment-form';
import sdkInitSlice from './paystation-sdk-initialization';
import sdkSetTokenSlice from './paystation-sdk-set-token';
import setTokenMiddleware from './sdk-configuration/set-token.middleware.ts';
import paymentMethodsSlice from './payment-methods';
import setSdkInitializedMiddleware from './cart/sdk-initialized.middleware.ts';
import cartSlice from './cart';
import shopSlice from './shop';
import updateCartMiddleware from './cart/update-cart.middleware.ts';
import paymentNavigationSlice from './payment-navigation';
import paymentStatusSlice from './payment-status';
import paymentFormNextActionSlice from './payment-form-next-action';
import nextActionMiddleware from './payment-form-next-action/next-action.middleware.ts';
import resetNextActionMiddleware from './payment-form-next-action/reset-next-action.middleware.ts';

export const store = configureStore({
  reducer: {
    sdkConfigurationSlice,
    paymentFormSlice,
    paymentMethodsSlice,
    sdkInitSlice,
    sdkSetTokenSlice,
    cartSlice,
    shopSlice,
    paymentNavigationSlice,
    paymentStatusSlice,
    paymentFormNextActionSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(setTokenMiddleware.middleware)
      .prepend(setSdkInitializedMiddleware.middleware)
      .prepend(updateCartMiddleware.middleware)
      .prepend(nextActionMiddleware.middleware)
      .prepend(resetNextActionMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
