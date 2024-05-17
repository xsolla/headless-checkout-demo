import React from 'react';
import { CartItems } from './ui/CartItems.tsx';
import { StyledCartContainer } from './styled/cart.styled.ts';
import { FinanceDetails } from './ui/FinanceDetails.tsx';
import { useAppSelector } from '../../../../redux/hooks.ts';
import { selectSdkInitStatus } from '../../../../redux/paystation-sdk-initialization';
import { selectTokenIsSet } from '../../../../redux/paystation-sdk-set-token';

export function Cart() {
  const sdkIsInit = useAppSelector(selectSdkInitStatus);
  const tokenIsSet = useAppSelector(selectTokenIsSet);

  return (
    <StyledCartContainer>
      <div className='cart-items'>
        <CartItems />
      </div>
      {sdkIsInit && tokenIsSet && <FinanceDetails />}
    </StyledCartContainer>
  );
}
