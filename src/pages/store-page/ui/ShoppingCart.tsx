import React from 'react';
import { StyledShoppingCart } from '../styled/shopping-cart.styles.ts';
import { StyledSectionTitle } from '../styled/root.styles.ts';
import { FormattedMessage } from 'react-intl';
import { Cart } from './cart';
import { Shop } from './shop';
import { selectShopVisibility } from '../../../redux/shop';
import { useAppSelector } from '../../../redux/hooks.ts';

export const ShoppingCart = () => {
  const shopIsVisible = useAppSelector(selectShopVisibility);
  return (
    <StyledShoppingCart>
      <StyledSectionTitle>
        <FormattedMessage
          id={'store.page.shopping-cart.title'}
          defaultMessage={'Shopping cart'}
        ></FormattedMessage>
      </StyledSectionTitle>
      <div className='cart'>
        <Cart />
      </div>
      {shopIsVisible && (
        <div className='shop'>
          <Shop />
        </div>
      )}
    </StyledShoppingCart>
  );
};
