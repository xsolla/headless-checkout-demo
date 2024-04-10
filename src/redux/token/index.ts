import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { getToken } from '../../api/token';
import { getUrlSearchParameter } from '../../shared/get-url-search-parameter.function.ts';
import { useAppSelector } from '../hooks.ts';

export const generateToken = createAsyncThunk(
  'token/fetch',
  async (parameters: { sandbox: boolean }, thunkAPI) => {
    try {
      const response = await getToken(parameters);
      const token = response;
      thunkAPI.dispatch(setToken(token));

      return response;
    } catch (error: unknown) {
      // @ts-expect-error need default error type
      const message = error.message;

      return thunkAPI.rejectWithValue(message);
    }
  },
);

const initialState = {
  token: (() => {
    return getUrlSearchParameter('token');
  })(),
  isFetching: false,
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
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
      })
      .addCase(generateToken.rejected, (state) => {
        state.isFetching = false;
      });
  },
});

export const { setToken } = tokenSlice.actions;

export const selectToken = () => useAppSelector((state: RootState) => state.token.token);
export const selectTokenIsFetching = () =>
  useAppSelector((state: RootState) => state.token.isFetching);

export default tokenSlice.reducer;
