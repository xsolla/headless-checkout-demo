import { StyledPaymentMethodsContainer } from '../styled/root.styles.ts';
import { PaymentMethodsSkeleton } from './PaymentMethodsSkeleton.tsx';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks.ts';
import { selectTokenIsSet } from '../../../redux/paystation-sdk-set-token';
import { getPaymentMethods, selectPaymentMethods } from '../../../redux/payment-methods';

export const PaymentMethods = () => {
  const dispatch = useAppDispatch();
  const tokenIsSetInSdk = useAppSelector(selectTokenIsSet);
  const paymentMethods = useAppSelector(selectPaymentMethods);

  useEffect(() => {
    if (tokenIsSetInSdk) {
      dispatch(getPaymentMethods());
    }
  }, [tokenIsSetInSdk]);
  return (
    <StyledPaymentMethodsContainer>
      {!paymentMethods && <PaymentMethodsSkeleton />}
    </StyledPaymentMethodsContainer>
  );
};
