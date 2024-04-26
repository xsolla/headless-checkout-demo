import React from 'react';
import { CartItem } from './CartItem.tsx';
import { useAppSelector } from '../../../redux/hooks.ts';
import { selectCartItemsEntities, selectCartItemsIds } from '../../../redux/cart';
import { StyledCartItemsContainer } from '../styled/cart-items.styled.ts';

export function CartItems() {
  const cartItemsIds = useAppSelector(selectCartItemsIds);
  const cartItemsEntities = useAppSelector(selectCartItemsEntities);

  return (
    <StyledCartItemsContainer>
      {cartItemsIds.map((id) => (
        <CartItem key={id} {...cartItemsEntities[id]} />
      ))}
    </StyledCartItemsContainer>
  );
}
