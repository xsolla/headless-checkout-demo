import React from 'react';
import { StyledShoppingCart } from '../styled/shopping-cart.styles.ts';
import { StyledSectionTitle } from '../styled/root.styles.ts';
import { FormattedMessage } from 'react-intl';
import { Cart } from '../../../components/cart';
import { Shop } from '../../../components/shop';

export const ShoppingCart = () => (
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
    <div className='shop'>
      <Shop />
    </div>
  </StyledShoppingCart>
);
