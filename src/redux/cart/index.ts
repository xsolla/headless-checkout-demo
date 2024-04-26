import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

import * as cartItems from './cart-items.json';
import { ShopItem } from '../shop/shop-item.interface.ts';
import { CartItem } from './cart-item.interface.ts';
import { FinanceDetails } from '@xsolla/pay-station-sdk';
import { getCartItemIdByTitle } from './get-cart-item-id.function.ts';
// @ts-expect-error @typescript-eslint/ban-ts-comment
const defaultCartItems = cartItems.default as CartItem[];

const initialState: { ids: string[]; entities: { [key: string]: CartItem } } = {
  ids: defaultCartItems.map(({ id }) => id),
  entities: defaultCartItems.reduce((entities: { [key: string]: CartItem }, item) => {
    entities[item.id] = item;
    return entities;
  }, {}),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCartItemsPrices: (state, action: PayloadAction<FinanceDetails>) => {
      action.payload.cartItems.forEach((cartItem) => {
        const cartItemId = getCartItemIdByTitle(cartItem.title);
        if (state.entities[cartItemId]) {
          state.entities[cartItemId].price = cartItem.price;
        }
      });
    },
    addItem: (state, action: PayloadAction<ShopItem>) => {
      const addedItem: CartItem = { ...action.payload, removable: true };
      state.ids.push(addedItem.id);
      state.entities[addedItem.id] = addedItem;
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const { id: itemId } = action.payload;
      delete state.entities[itemId];
      state.ids = state.ids.filter((id) => id !== itemId);
    },
  },
});

export const { addItem, removeItem, updateCartItemsPrices } = cartSlice.actions;

export const selectCartItemsIds = (state: RootState) => state.cartSlice.ids;
export const selectCartItemsEntities = (state: RootState) => state.cartSlice.entities;
export const selectItemIsInCart = (state: RootState, itemId: string) =>
  !!state.cartSlice.entities[itemId];

export default cartSlice.reducer;
