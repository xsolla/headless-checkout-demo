import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

import * as cartItems from './shop-item.json';
import { ShopItem } from './shop-item.interface.ts';
// @ts-expect-error @typescript-eslint/ban-ts-comment
const defaultShopItems = cartItems.default as ShopItem[];

const initialState: { items: ShopItem[]; isVisible: boolean } = {
  items: defaultShopItems,
  isVisible: true,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setShopVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
  },
});

export const { setShopVisibility } = shopSlice.actions;
export const selectShopItems = (state: RootState) => state.shopSlice.items;
export const selectShopVisibility = (state: RootState) => state.shopSlice.isVisible;

export default shopSlice.reducer;
