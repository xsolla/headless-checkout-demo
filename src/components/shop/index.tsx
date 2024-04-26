import React from 'react';
import { StyledShopContainer } from './styled/shop.styled.ts';
import { useAppSelector } from '../../redux/hooks.ts';
import { ShopItem } from './ui/ShopItem.tsx';
import { selectShopItems } from '../../redux/shop';

export function Shop() {
  const shopItems = useAppSelector(selectShopItems);

  return (
    <StyledShopContainer>
      {shopItems.map((cartItem) => (
        <div className='shop-item' key={cartItem.id}>
          <ShopItem {...cartItem} />
        </div>
      ))}
    </StyledShopContainer>
  );
}
