import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { getToken } from '../../api/token';
import { getUrlSearchParameter } from '../../shared/get-url-search-parameter.function.ts';
import { getErrorMessage } from '../../shared/get-error-message.function.ts';
import { SdkConfigurationInitState } from './sdk-configuration-init-state.interface.ts';
import { Lang } from '@xsolla/pay-station-sdk';
import { selectCartItemsIds } from '../cart';

export const createToken = createAsyncThunk(
  'token/fetch',
  async (parameters: { tokenFromUrl?: string } | void, thunkAPI) => {
    try {
      if (parameters && parameters.tokenFromUrl) {
        thunkAPI.dispatch(setToken(parameters.tokenFromUrl));
        return;
      }
      const state = thunkAPI.getState() as RootState;
      const locale = selectCurrentLanguage(state);
      const cartItems = selectCartItemsIds(state);
      const isSandbox = selectIsSandbox(state);

      const requestParams = { sandbox: isSandbox === '1', locale, items: cartItems };

      const response = await getToken(requestParams);
      const token = response;

      thunkAPI.dispatch(setToken(token));

      return response;
    } catch (error: unknown) {
      const message = getErrorMessage(error);

      return thunkAPI.rejectWithValue(message);
    }
  },
);

const initialState: SdkConfigurationInitState = {
  token: getUrlSearchParameter('token'),
  sandbox: getUrlSearchParameter('sandbox'),
  isFetching: false,
  language: Lang.EN,
  tokenGenerated: false,
};

const sdkConfigurationSlice = createSlice({
  name: 'sdk-configuration',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.tokenGenerated = true;
    },
    setLanguage: (state, action: PayloadAction<Lang>) => {
      state.language = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createToken.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(createToken.fulfilled, (state, action) => {
        state.isFetching = false;
        state.token = action.payload as string;
        state.tokenGenerated = true;
      })
      .addCase(createToken.rejected, (state) => {
        state.isFetching = false;
      });
  },
});

export const { setToken, setLanguage } = sdkConfigurationSlice.actions;

export const selectToken = (state: RootState) => state.sdkConfigurationSlice.token;
export const selectTokenIsFetching = (state: RootState) => state.sdkConfigurationSlice.isFetching;
export const selectIsSandbox = (state: RootState) => state.sdkConfigurationSlice.sandbox;
export const selectCurrentLanguage = (state: RootState) => state.sdkConfigurationSlice.language;
export const selectTokenGenerated = (state: RootState) =>
  state.sdkConfigurationSlice.tokenGenerated;

export default sdkConfigurationSlice.reducer;
