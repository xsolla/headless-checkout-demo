import React from 'react';
import { FormattedMessage } from 'react-intl';
import cartIcon from '../../../../../assets/icons/cart.svg';
import { StyledInCartState } from '../styled/in-cart-state.styled.ts';

export const InCartState = () => (
  <StyledInCartState>
    <FormattedMessage id={'shop.in_cart'} defaultMessage={'In the cart'}></FormattedMessage>
    <img src={cartIcon} />
  </StyledInCartState>
);
