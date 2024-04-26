import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { getPaymentFormSdk } from '../../sdk/payment-form';
import { PaymentFormState } from './payment-form-state.interface.ts';
import { Field } from '@xsolla/pay-station-sdk/dist/core/form/field.interface';
import { FormConfiguration } from '@xsolla/pay-station-sdk/dist/core/form/form-configuration.interface';
import { getErrorMessage } from '../../shared/get-error-message.function.ts';

export const getPaymentForm = createAsyncThunk(
  'form/fetch',
  async (parameters: { pid: number }, thunkAPI) => {
    try {
      const formConfig: FormConfiguration = {
        paymentMethodId: parameters.pid,
        returnUrl: import.meta.env.VITE_RETURN_URL,
      };
      const response = await getPaymentFormSdk(formConfig);
      const fields = response;
      thunkAPI.dispatch(setPaymentFormFields({ fields }));

      return response;
    } catch (error: unknown) {
      const message = getErrorMessage(error);

      return thunkAPI.rejectWithValue(message);
    }
  },
);

const initialState: PaymentFormState = {
  fields: null,
  isFetching: false,
};

const paymentFormSlice = createSlice({
  name: 'payment-form',
  initialState,
  reducers: {
    setPaymentFormFields: (state, action: PayloadAction<{ fields: Field[] }>) => {
      state.fields = action.payload.fields;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPaymentForm.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getPaymentForm.fulfilled, (state, action) => {
        state.isFetching = false;
        state.fields = action.payload;
      })
      .addCase(getPaymentForm.rejected, (state) => {
        state.isFetching = false;
      });
  },
});

export const { setPaymentFormFields } = paymentFormSlice.actions;

export const selectPaymentFormFields = (state: RootState) => state.paymentFormSlice.fields;
export const selectPaymentFormIsFetching = (state: RootState) => state.paymentFormSlice.isFetching;

export default paymentFormSlice.reducer;
