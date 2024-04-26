import { StyledPaymentMethodSkeleton } from '../styled/payment-method-skeleton.styles.ts';
import { FC } from 'react';

export const PaymentMethodsSkeleton: FC<{ count?: number }> = ({ count = 5 }) => {
  return (
    <>
      {Array.from(Array(count).keys()).map((key) => (
        <StyledPaymentMethodSkeleton key={key} />
      ))}
    </>
  );
};
