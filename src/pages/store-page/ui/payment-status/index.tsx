import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks.ts';
import { getPaymentStatus, selectPaymentStatusState } from '../../../../redux/payment-status';
import { StyledPaymentStatus } from '../../styled/payment-status.styles.ts';
import { selectShopVisibility, setShopVisibility } from '../../../../redux/shop';
import { PaymentStatusStates } from '../../../../redux/payment-status/payment-status-states.enum.ts';

export const PaymentStatus = () => {
  const dispatch = useAppDispatch();
  const statusState = useAppSelector(selectPaymentStatusState);
  const shopIsVisible = useAppSelector(selectShopVisibility);

  useEffect(() => {
    if (!statusState) {
      dispatch(getPaymentStatus());
    }
  }, [statusState]);

  useEffect(() => {
    if (shopIsVisible) {
      dispatch(setShopVisibility(false));
    }
  }, [shopIsVisible]);

  return (
    <StyledPaymentStatus>
      {statusState && statusState !== PaymentStatusStates.processing && (
        <p className='status-image'>
          <img className='image' src={`/status/${statusState}.png`} />
        </p>
      )}
      <psdk-status></psdk-status>
    </StyledPaymentStatus>
  );
};
