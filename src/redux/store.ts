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

export const store = configureStore({
  reducer: {
    sdkConfigurationSlice,
    paymentFormSlice,
    paymentMethodsSlice,
    sdkInitSlice,
    sdkSetTokenSlice,
    cartSlice,
    shopSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(setTokenMiddleware.middleware)
      .prepend(setSdkInitializedMiddleware.middleware)
      .prepend(updateCartMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
