import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { NextAction } from '@xsolla/pay-station-sdk/dist/core/actions/next-action.interface';

const initialState: { nextAction: null | NextAction; initialized: boolean } = {
  nextAction: null,
  initialized: false,
};

const paymentFormNextActionSlice = createSlice({
  name: 'payment-navigation',
  initialState,
  reducers: {
    setNextAction: (state, action: PayloadAction<NextAction | null>) => {
      state.nextAction = action.payload;
    },
    setNextActionInit: (state) => {
      state.initialized = true;
    },
  },
});
export const { setNextAction, setNextActionInit } = paymentFormNextActionSlice.actions;

export const selectPaymentFormNextAction = (state: RootState) =>
  state.paymentFormNextActionSlice.nextAction;
export const selectPaymentFormNextActionInit = (state: RootState) =>
  state.paymentFormNextActionSlice.initialized;

export default paymentFormNextActionSlice.reducer;
