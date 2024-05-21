import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { getErrorMessage } from '../../shared/get-error-message.function.ts';
import { PaymentMethodsState } from './payment-methods-state.interface.ts';
import { PaymentMethod } from '@xsolla/pay-station-sdk/dist/core/payment-method.interface';
import { getPaymentMethodsPayStationSdk } from '../../sdk/payment-methods';
import { isDevMode } from '../../utils/is-dev-mode.const.ts';
import { displayedPaymentMethodsIdsConst } from '../../shared/payment/payment-methods-ids.const.ts';

export const getPaymentMethods = createAsyncThunk('sdk/methods', async (_, thunkAPI) => {
  try {
    const paymentMethods = await getPaymentMethodsPayStationSdk();

    thunkAPI.dispatch(setPaymentMethods({ paymentMethods }));
    return paymentMethods;
  } catch (error: unknown) {
    if (isDevMode) {
      console.log(error);
    }

    const message = getErrorMessage(error);

    return thunkAPI.rejectWithValue(message);
  }
});

const initialState: PaymentMethodsState = {
  paymentMethods: null,
  isFetching: false,
};

const paymentMethodsSlice = createSlice({
  name: 'payment-methods',
  initialState,
  reducers: {
    setPaymentMethods: (state, action: PayloadAction<{ paymentMethods: PaymentMethod[] }>) => {
      state.paymentMethods = action.payload.paymentMethods;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPaymentMethods.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getPaymentMethods.fulfilled, (state, action) => {
        state.isFetching = false;
        state.paymentMethods = action.payload
          .filter((method) => displayedPaymentMethodsIdsConst.includes(method.id))
          .sort(
            (a, b) =>
              displayedPaymentMethodsIdsConst.indexOf(a.id) -
              displayedPaymentMethodsIdsConst.indexOf(b.id),
          );
      })
      .addCase(getPaymentMethods.rejected, (state) => {
        state.isFetching = false;
      });
  },
});

export const { setPaymentMethods } = paymentMethodsSlice.actions;

export const selectPaymentMethods = (state: RootState) => state.paymentMethodsSlice.paymentMethods;
export const selectPaymentMethodsIsFetching = (state: RootState) =>
  state.paymentMethodsSlice.isFetching;

export default paymentMethodsSlice.reducer;
