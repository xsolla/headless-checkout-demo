import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { getErrorMessage } from '../../shared/get-error-message.function.ts';
import { isDevMode } from '../../utils/is-dev-mode.const.ts';
import { PaymentStatusState } from './payment-status-state.interface.ts';
import { PaymentStatusStates } from './payment-status-states.enum.ts';
import { getPaymentStatusPayStationSdk } from '../../sdk/payment-status';
import { getPaymentStatusState } from './get-payment-status-state.function.ts';
import { onNextAction } from '../../sdk/payment-form';

export const getPaymentStatus = createAsyncThunk('sdk/status', async (_, thunkAPI) => {
  try {
    const status = await getPaymentStatusPayStationSdk();
    const paymentStatus = getPaymentStatusState(status);
    thunkAPI.dispatch(setPaymentStatusState(paymentStatus));
    if (paymentStatus === PaymentStatusStates.processing) {
      onNextAction((action) => {
        if (action.type === 'status_updated') {
          if (action.data.isCanceled) {
            thunkAPI.dispatch(setPaymentStatusState(PaymentStatusStates.failed));
          } else if (action.data.isSuccess) {
            thunkAPI.dispatch(setPaymentStatusState(PaymentStatusStates.success));
          }
        }
      });
    }
    return;
  } catch (error: unknown) {
    if (isDevMode) {
      console.log(error);
    }

    const message = getErrorMessage(error);

    return thunkAPI.rejectWithValue(message);
  }
});

const initialState: PaymentStatusState = {
  statusState: null,
  isFetching: false,
};

const paymentStatusSlice = createSlice({
  name: 'payment-status',
  initialState,
  reducers: {
    setPaymentStatusState: (state, action: PayloadAction<PaymentStatusStates>) => {
      state.statusState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPaymentStatus.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getPaymentStatus.fulfilled, (state) => {
        state.isFetching = false;
      })
      .addCase(getPaymentStatus.rejected, (state) => {
        state.isFetching = false;
      });
  },
});

export const { setPaymentStatusState } = paymentStatusSlice.actions;

export const selectPaymentStatusState = (state: RootState) => state.paymentStatusSlice.statusState;
export const selectPaymentStatusIsFetching = (state: RootState) =>
  state.paymentStatusSlice.isFetching;

export default paymentStatusSlice.reducer;
