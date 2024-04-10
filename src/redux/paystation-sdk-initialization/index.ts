import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { initPayStationSdkLib } from '../../sdk/initialization';
import { SdkInitState } from './sdk-init-state.interface.ts';
import { Lang } from '@xsolla/pay-station-sdk';
import { SdkInitConfig } from './sdk-init-config.interface.ts';
import { selectIsSandbox } from '../sandbox';
import { getErrorMessage } from '../../shared/get-error-message.function.ts';

export const initPayStationSdk = createAsyncThunk('sdk/init', async (_, thunkAPI) => {
  try {
    const state: RootState = thunkAPI.getState() as RootState;
    const sdkInitializing = selectSdkIsInitializing(state);
    if (sdkInitializing) {
      return;
    }
    const config: SdkInitConfig = {
      isWebview: false,
      theme: 'default',
      language: Lang.EN,
    };
    const isSandboxMode = selectIsSandbox(state);
    if (isSandboxMode) {
      config.sandbox = !!isSandboxMode;
    }
    await initPayStationSdkLib(config);
    thunkAPI.dispatch(setSdkInitialized());
    return;
  } catch (error: unknown) {
    const message = getErrorMessage(error);

    return thunkAPI.rejectWithValue(message);
  }
});

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
        state.initialized = true;
      })
      .addCase(initPayStationSdk.rejected, (state) => {
        state.isFetching = false;
      });
  },
});

export const { setSdkInitialized } = sdkInitSlice.actions;

export const selectSdkInitStatus = (state: RootState) => state.sdkInitializing.initialized;
export const selectSdkIsInitializing = (state: RootState) => state.sdkInitializing.isFetching;

export default sdkInitSlice.reducer;
