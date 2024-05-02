import React from 'react';
import { CartItems } from './ui/CartItems.tsx';
import { StyledCartContainer } from './styled/cart.styled.ts';
import { FinanceDetails } from './ui/FinanceDetails.tsx';
import { useAppSelector } from '../../redux/hooks.ts';
import { selectSdkInitStatus } from '../../redux/paystation-sdk-initialization';

export function Cart() {
  const sdkIsInit = useAppSelector(selectSdkInitStatus);

  return (
    <StyledCartContainer>
      <div className='cart-items'>
        <CartItems />
      </div>
      {sdkIsInit && <FinanceDetails />}
    </StyledCartContainer>
  );
}
