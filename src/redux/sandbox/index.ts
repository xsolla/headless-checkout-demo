import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { getUrlSearchParameter } from '../../shared/get-url-search-parameter.function.ts';
import { useAppSelector } from '../hooks.ts';

const initialState = {
  sandbox: (() => {
    return getUrlSearchParameter('sandbox');
  })(),
};

const sandboxSlice = createSlice({
  name: 'sandbox',
  initialState,
  reducers: {},
});

export const selectIsSandbox = () => useAppSelector((state: RootState) => state.sandbox.sandbox);

export default sandboxSlice.reducer;
