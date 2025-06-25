import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { StorePageRoutes } from '../../routes/store-page/store-page-routes.enum.ts';

const initialState: { nextPage: null | StorePageRoutes } = {
  nextPage: null,
};

const paymentNavigationSlice = createSlice({
  name: 'payment-navigation',
  initialState,
  reducers: {
    setNextPage: (state, action: PayloadAction<StorePageRoutes | null>) => {
      state.nextPage = action.payload;
    },
  },
});
export const { setNextPage } = paymentNavigationSlice.actions;

export const selectPaymentNextPage = (state: RootState) => state.paymentNavigationSlice.nextPage;

export default paymentNavigationSlice.reducer;
