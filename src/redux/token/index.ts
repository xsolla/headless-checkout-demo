import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { getToken } from '../../api/token';
import { getUrlSearchParameter } from '../../shared/get-url-search-parameter.function.ts';
import { getErrorMessage } from '../../shared/get-error-message.function.ts';

export const generateToken = createAsyncThunk(
  'token/fetch',
  async (parameters: { sandbox: boolean }, thunkAPI) => {
    try {
      const response = await getToken(parameters);
      const token = response;
      thunkAPI.dispatch(setToken(token));

      return response;
    } catch (error: unknown) {
      const message = getErrorMessage(error);

      return thunkAPI.rejectWithValue(message);
    }
  },
);

const initialState = {
  token: (() => {
    return getUrlSearchParameter('token');
  })(),
  isFetching: false,
  tokenGenerated: false,
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.tokenGenerated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateToken.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(generateToken.fulfilled, (state, action: PayloadAction<string>) => {
        state.isFetching = false;
        state.token = action.payload;
        state.tokenGenerated = true;
      })
      .addCase(generateToken.rejected, (state) => {
        state.isFetching = false;
      });
  },
});

export const { setToken } = tokenSlice.actions;

export const selectToken = (state: RootState) => state.token.token;
export const selectTokenIsFetching = (state: RootState) => state.token.isFetching;
export const selectTokenGenerated = (state: RootState) => state.token.tokenGenerated;

export default tokenSlice.reducer;
