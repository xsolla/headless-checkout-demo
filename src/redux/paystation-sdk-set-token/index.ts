import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { setTokenHeadlessCheckoutLib } from '../../sdk/initialization';
import { getErrorMessage } from '../../shared/get-error-message.function.ts';
import { SdkSetTokenInitState } from './sdk-set-token-init-state.interface.ts';

export const setTokenPayStationSdk = createAsyncThunk(
  'sdk/set-token',
  async (parameters: { token: string }, thunkAPI) => {
    try {
      await setTokenHeadlessCheckoutLib(parameters.token);
      thunkAPI.dispatch(setSdkTokenIsSet(true));
    } catch (error: unknown) {
      const message = getErrorMessage(error);

      return thunkAPI.rejectWithValue(message);
    }
  },
);

const initialState: SdkSetTokenInitState = {
  tokenIsSet: false,
};

const sdkSetTokenSlice = createSlice({
  name: 'sdk-set-token',
  initialState,
  reducers: {
    setSdkTokenIsSet: (state, action: PayloadAction<boolean>) => {
      state.tokenIsSet = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setTokenPayStationSdk.pending, (state) => {
        state.tokenIsSet = false;
      })
      .addCase(setTokenPayStationSdk.fulfilled, (state) => {
        state.tokenIsSet = true;
      })
      .addCase(setTokenPayStationSdk.rejected, (state) => {
        state.tokenIsSet = false;
      });
  },
});

export const { setSdkTokenIsSet } = sdkSetTokenSlice.actions;

export const selectTokenIsSet = (state: RootState) => state.sdkSetTokenSlice.tokenIsSet;

export default sdkSetTokenSlice.reducer;
