import React, { useEffect, useState } from 'react';
import { StyledShopItemContainer } from '../styled/shop-item.styled.ts';
import { ShopItemProps } from './shop-item-props.interface.ts';
import { useIntl } from 'react-intl';
import { Currency } from 'react-intl-number-format';
import { StyledBuyButton } from '../styled/buy-button.styled.ts';
import { addItem, selectItemIsInCart } from '../../../../../redux/cart';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks.ts';
import { InCartState } from './InCartState.tsx';
export const ShopItem = (props: ShopItemProps) => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: `store.items.${props.id}` });
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useAppDispatch();

  const itemIsInCart = useAppSelector((state) => selectItemIsInCart(state, props.id));

  useEffect(() => {
    setIsInCart(itemIsInCart);
  }, [itemIsInCart]);

  return (
    <StyledShopItemContainer>
      <div className='image-container'>
        <img className='image' src={`/shop-items/${props.id}.png`} />
      </div>

      <div className='details-wrapper'>
        <div className='title'>{title}</div>
        {isInCart ? (
          <InCartState />
        ) : (
          <StyledBuyButton onClick={() => dispatch(addItem(props))}>
            <Currency currency={props.price.currency}>{props.price.amount}</Currency>
          </StyledBuyButton>
        )}
      </div>
    </StyledShopItemContainer>
  );
};
