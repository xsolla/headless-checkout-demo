import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks.ts';
import { selectShopVisibility, setShopVisibility } from '../../../../redux/shop';
import { PaymentStatus } from '../payment-status';
import { selectSdkInitStatus } from '../../../../redux/paystation-sdk-initialization';
import { ReturnLoader } from './ui/loader';

export const Return = () => {
  const dispatch = useAppDispatch();
  const shopIsVisible = useAppSelector(selectShopVisibility);

  useEffect(() => {
    if (shopIsVisible) {
      dispatch(setShopVisibility(false));
    }
  }, [shopIsVisible]);

  const [isLoading, setLoading] = useState(true);
  const sdkIsInit = useAppSelector(selectSdkInitStatus);

  useEffect(() => {
    if (sdkIsInit) {
      setLoading(false);
    }
  }, [sdkIsInit]);

  return <>{isLoading ? <ReturnLoader /> : <PaymentStatus />}</>;
};
