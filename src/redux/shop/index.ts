import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

import * as cartItems from './shop-item.json';
import { ShopItem } from './shop-item.interface.ts';
// @ts-expect-error @typescript-eslint/ban-ts-comment
const defaultShopItems = cartItems.default as ShopItem[];

const initialState: { items: ShopItem[] } = {
  items: defaultShopItems,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
});

export const selectShopItems = (state: RootState) => state.shopSlice.items;

export default shopSlice.reducer;
