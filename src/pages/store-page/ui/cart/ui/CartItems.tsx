import React from 'react';
import { CartItem } from './CartItem.tsx';
import { useAppSelector } from '../../../../../redux/hooks.ts';
import { selectCartItemsEntities, selectCartItemsIds } from '../../../../../redux/cart';
import { StyledCartItemsContainer } from '../styled/cart-items.styled.ts';
import { selectShopVisibility } from '../../../../../redux/shop';

export function CartItems() {
  const cartItemsIds = useAppSelector(selectCartItemsIds);
  const cartItemsEntities = useAppSelector(selectCartItemsEntities);
  const shopIsVisible = useAppSelector(selectShopVisibility);

  return (
    <StyledCartItemsContainer>
      {cartItemsIds.map((id) => (
        <CartItem
          key={id}
          id={cartItemsEntities[id].id}
          price={cartItemsEntities[id].price}
          removable={cartItemsEntities[id].removable && shopIsVisible}
        />
      ))}
    </StyledCartItemsContainer>
  );
}
