import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { initHeadlessCheckoutLib } from '../../sdk/initialization';
import { SdkInitState } from './sdk-init-state.interface.ts';
import { Lang } from '@xsolla/pay-station-sdk';
import { SdkInitConfig } from './sdk-init-config.interface.ts';
import { getErrorMessage } from '../../shared/get-error-message.function.ts';
import { selectIsSandbox } from '../sdk-configuration';

export const initPayStationSdk = createAsyncThunk(
  'sdk/init',
  async (parameters: { language: Lang }, thunkAPI) => {
    try {
      const state: RootState = thunkAPI.getState() as RootState;
      if (state.sdkInitSlice.initialized) {
        return;
      }

      const config: SdkInitConfig = {
        isWebview: false,
        theme: 'default',
        language: parameters.language,
      };
      const isSandboxMode = selectIsSandbox(state);
      if (isSandboxMode) {
        config.sandbox = !!isSandboxMode;
      }

      await initHeadlessCheckoutLib(config);
      thunkAPI.dispatch(setSdkInitialized());
    } catch (error: unknown) {
      const message = getErrorMessage(error);

      return thunkAPI.rejectWithValue(message);
    }
  },
);

const initialState: SdkInitState = {
  initialized: false,
  isFetching: false,
};

const sdkInitSlice = createSlice({
  name: 'sdk-initialization',
  initialState,
  reducers: {
    setSdkInitialized: (state) => {
      state.initialized = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initPayStationSdk.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(initPayStationSdk.fulfilled, (state) => {
        state.isFetching = false;
      })
      .addCase(initPayStationSdk.rejected, (state) => {
        state.isFetching = false;
      });
  },
});

export const { setSdkInitialized } = sdkInitSlice.actions;

export const selectSdkInitStatus = (state: RootState) => state.sdkInitSlice.initialized;
export const selectSdkIsInitializing = (state: RootState) => state.sdkInitSlice.isFetching;

export default sdkInitSlice.reducer;
