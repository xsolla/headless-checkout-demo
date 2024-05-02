import React from 'react';
import { StyledCartItemContainer } from '../styled/cart-item.styled.ts';
import { CartItemProps } from './cart-item-props.interface.ts';
import { FormattedMessage, useIntl } from 'react-intl';
import { Currency } from 'react-intl-number-format';
import { useAppDispatch } from '../../../redux/hooks.ts';
import { removeItem } from '../../../redux/cart';
import { StyledRemoveButton } from '../styled/remove-button.styled.ts';
export const CartItem = (props: CartItemProps) => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: `store.items.${props.id}` });
  const dispatch = useAppDispatch();

  return (
    <StyledCartItemContainer>
      <div className='image-container'>
        <img className='image' src={`/shop-items/${props.id}.png`} />
      </div>

      <div className='details-wrapper'>
        <div className='details'>
          <div className='title'>{title}</div>
          {props.removable ? (
            <StyledRemoveButton onClick={() => dispatch(removeItem(props))}>
              <FormattedMessage id={'cart.remove'} defaultMessage={'Remove'}></FormattedMessage>
            </StyledRemoveButton>
          ) : null}
        </div>
        <div className='price-wrapper'>
          <div className='price'>
            <Currency currency={props.price.currency}>{props.price.amount}</Currency>
          </div>
        </div>
      </div>
    </StyledCartItemContainer>
  );
};
