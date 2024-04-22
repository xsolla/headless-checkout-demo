import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { getUrlSearchParameter } from '../../shared/get-url-search-parameter.function.ts';

const defaultCountryIso = 'us';

const initialState = {
  country: (() => {
    return getUrlSearchParameter('country') ?? defaultCountryIso;
  })(),
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
  },
});

export const { setCountry } = countrySlice.actions;

export const selectCountry = (state: RootState) => state.country.country;

export default countrySlice.reducer;
