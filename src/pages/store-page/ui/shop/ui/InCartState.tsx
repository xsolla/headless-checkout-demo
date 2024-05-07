import { FormattedMessage } from 'react-intl';
import React from 'react';
import cartIcon from '../../../../../assets/cart.svg';
import { StyledInCartState } from '../styled/in-cart-state.styled.ts';

export const InCartState = () => (
  <StyledInCartState>
    <FormattedMessage id={'shop.in_cart'} defaultMessage={'In the cart'}></FormattedMessage>
    <img src={cartIcon} />
  </StyledInCartState>
);
