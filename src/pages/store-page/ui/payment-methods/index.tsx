import { StyledPaymentMethodsContainer } from '../../styled/root.styles.ts';
import { PaymentMethodsSkeleton } from './payment-method-skeleton';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks.ts';
import { selectTokenIsSet } from '../../../../redux/paystation-sdk-set-token';
import { getPaymentMethods, selectPaymentMethods } from '../../../../redux/payment-methods';
import { PaymentMethod } from './payment-method';
import { MoreMethodsButton } from '../buttons/more-methods';

export const PaymentMethods = () => {
  const defaultMethodsCount = 4;

  const dispatch = useAppDispatch();
  const tokenIsSetInSdk = useAppSelector(selectTokenIsSet);
  const paymentMethods = useAppSelector(selectPaymentMethods);

  const [displayCount, setDisplayCount] = useState(defaultMethodsCount);
  const [idExpandedMethod, setIdExpandedMethod] = useState<null | number>(null);
  const displayedPaymentMethods = useMemo(
    () => paymentMethods?.slice(0, displayCount),
    [paymentMethods, displayCount],
  );

  const needShowMoreButton = displayCount === defaultMethodsCount;

  useEffect(() => {
    if (tokenIsSetInSdk) {
      dispatch(getPaymentMethods());
    }
  }, [tokenIsSetInSdk]);

  const showMoreMethodsHandler = useCallback(() => {
    if (paymentMethods) {
      setDisplayCount(paymentMethods.length);
    }
  }, [paymentMethods]);

  const handleExpandClick = useCallback(
    (pid: number) => {
      if (pid === idExpandedMethod) {
        setIdExpandedMethod(null);
        return;
      }

      setIdExpandedMethod(pid);
    },
    [idExpandedMethod],
  );

  return (
    <StyledPaymentMethodsContainer>
      {!displayedPaymentMethods && <PaymentMethodsSkeleton />}
      {displayedPaymentMethods && (
        <>
          {displayedPaymentMethods.map((method) => (
            <PaymentMethod
              key={method.name}
              name={method.name}
              iconName={method.iconName}
              pid={method.id}
              isExpanded={idExpandedMethod === method.id}
              handleCLick={() => handleExpandClick(method.id)}
            />
          ))}
          {needShowMoreButton && <MoreMethodsButton handleClick={showMoreMethodsHandler} />}
        </>
      )}
    </StyledPaymentMethodsContainer>
  );
};
