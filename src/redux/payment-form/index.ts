import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { getPaymentFormSdk } from '../../sdk/payment-form';
import { PaymentFormState } from './payment-form-state.interface.ts';
import { Field } from '@xsolla/pay-station-sdk/dist/core/form/field.interface';
import { FormConfiguration } from '@xsolla/pay-station-sdk/dist/core/form/form-configuration.interface';
import { getErrorMessage } from '../../shared/get-error-message.function.ts';
import { getReturnUrl } from './get-return-url.function.ts';
import { selectIsSandbox } from '../sdk-configuration';

export const getPaymentForm = createAsyncThunk(
  'form/fetch',
  async (parameters: { pid: number }, thunkAPI) => {
    try {
      const state: RootState = thunkAPI.getState() as RootState;
      const isSandboxMode = selectIsSandbox(state);
      const formConfig: FormConfiguration = {
        paymentMethodId: parameters.pid,
        returnUrl: getReturnUrl(isSandboxMode === '1'),
      };
      const { fields, isFormAutoSubmitted, submitButtonText, pid } =
        await getPaymentFormSdk(formConfig);
      thunkAPI.dispatch(setPaymentForm({ fields, isFormAutoSubmitted, submitButtonText }));

      return { fields, isFormAutoSubmitted, submitButtonText, pid };
    } catch (error: unknown) {
      const message = getErrorMessage(error);

      return thunkAPI.rejectWithValue(message);
    }
  },
);

const initialState: PaymentFormState = {
  fields: null,
  visibleFields: null,
  pid: null,
  isFetching: false,
  isFormAutoSubmitted: false,
  submitButtonText: '',
  isSecondStep: false,
  isSubmitButtonVisible: false,
  formError: null,
  canBeMounted: false,
};

const paymentFormSlice = createSlice({
  name: 'payment-form',
  initialState,
  reducers: {
    setPaymentForm: (
      state,
      action: PayloadAction<{
        fields: Field[] | null;
        isFormAutoSubmitted: boolean;
        submitButtonText: string;
        isSecondStep?: boolean;
      }>,
    ) => {
      state.fields = action.payload.fields;
      state.visibleFields = state.fields?.slice() ?? null;
      state.isFormAutoSubmitted = action.payload.isFormAutoSubmitted;
      state.submitButtonText = action.payload.submitButtonText;
      state.isSecondStep = !!action.payload.isSecondStep;
      state.isSubmitButtonVisible = true;
      state.canBeMounted = true;
    },
    setFormError: (state, action: PayloadAction<string | null>) => {
      state.formError = action.payload;
    },
    setPid: (state, action: PayloadAction<{ pid: number }>) => {
      state.pid = action.payload.pid;
    },
    resetPaymentForm: (state) => {
      state.fields = null;
      state.visibleFields = null;
      state.pid = null;
      state.isFetching = false;
      state.isFormAutoSubmitted = false;
      state.submitButtonText = '';
      state.isSecondStep = false;
      state.isSubmitButtonVisible = false;
      state.formError = null;
      state.canBeMounted = false;
    },
    resetSecondStep: (state) => {
      state.isSecondStep = false;
      state.fields = null;
      state.visibleFields = null;
      state.isFormAutoSubmitted = false;
      state.submitButtonText = '';
    },
    setFormCanBeMounted: (state, action: PayloadAction<boolean>) => {
      state.canBeMounted = action.payload;
    },
    hideSubmitButton: (state) => {
      state.isSubmitButtonVisible = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPaymentForm.pending, (state) => {
        state.isFetching = true;
        state.fields = null;
        state.visibleFields = null;
      })
      .addCase(getPaymentForm.fulfilled, (state) => {
        state.isFetching = false;
      })
      .addCase(getPaymentForm.rejected, (state) => {
        state.isFetching = false;
      });
  },
});

export const {
  setPaymentForm,
  setPid,
  resetPaymentForm,
  resetSecondStep,
  hideSubmitButton,
  setFormError,
  setFormCanBeMounted,
} = paymentFormSlice.actions;

export const selectPaymentFormSettings = (state: RootState) => state.paymentFormSlice;

export const selectPid = (state: RootState) => state.paymentFormSlice.pid;
export default paymentFormSlice.reducer;
