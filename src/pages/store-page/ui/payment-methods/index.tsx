import { PaymentMethodsSkeleton } from './payment-method-skeleton';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks.ts';
import { selectTokenIsSet } from '../../../../redux/paystation-sdk-set-token';
import {
  getPaymentMethods,
  selectPaymentMethods,
  setPaymentMethods,
} from '../../../../redux/payment-methods';
import { PaymentMethod } from './payment-method';
import { PaymentMethod as PaymentMethodInterface } from '@xsolla/pay-station-sdk/dist/core/payment-method.interface';
import { MoreMethodsButton } from '../buttons/more-methods';
import {
  resetPaymentForm,
  selectPaymentFormSettings,
  setPid,
} from '../../../../redux/payment-form';
import { StyledPaymentMethodsContainer } from '../../styled/payment-methods.styles.ts';
import { selectToken } from '../../../../redux/sdk-configuration';
import { selectShopVisibility, setShopVisibility } from '../../../../redux/shop';

export const PaymentMethods = () => {
  const defaultMethodsCount = 4;

  const dispatch = useAppDispatch();

  const tokenIsSetInSdk = useAppSelector(selectTokenIsSet);
  const token = useAppSelector(selectToken);
  const paymentMethods = useAppSelector(selectPaymentMethods);
  const { isSecondStep } = useAppSelector(selectPaymentFormSettings);

  const [displayCount, setDisplayCount] = useState(defaultMethodsCount);
  const [idExpandedMethod, setIdExpandedMethod] = useState<null | number>(null);
  const displayedPaymentMethods = useMemo(() => {
    if (!paymentMethods) {
      return [];
    }
    if (!isSecondStep) {
      return paymentMethods.slice(0, displayCount);
    }

    const methods: PaymentMethodInterface[] = [];
    const openedMethod = paymentMethods.find((method) => method.id === idExpandedMethod);

    if (openedMethod) {
      methods.push(openedMethod);
    }

    return methods;
  }, [paymentMethods, displayCount, isSecondStep]);

  const needShowMoreButton = displayCount === defaultMethodsCount && !isSecondStep;

  useEffect(() => {
    dispatch(setPaymentMethods({ paymentMethods: [] }));

    if (tokenIsSetInSdk) {
      dispatch(getPaymentMethods());
    }

    if (idExpandedMethod) {
      dispatch(setPid({ pid: idExpandedMethod }));
    }
  }, [tokenIsSetInSdk, token]);

  const showMoreMethodsHandler = useCallback(() => {
    if (paymentMethods) {
      setDisplayCount(paymentMethods.length);
    }
  }, [paymentMethods]);

  const handleExpandClick = useCallback(
    (pid: number) => {
      dispatch(resetPaymentForm());

      if (pid === idExpandedMethod) {
        setIdExpandedMethod(null);
        return;
      }

      setIdExpandedMethod(pid);
      dispatch(setPid({ pid }));
    },
    [idExpandedMethod],
  );

  const shopIsVisible = useAppSelector(selectShopVisibility);
  useEffect(() => {
    if (!shopIsVisible) {
      dispatch(setShopVisibility(true));
    }
  }, [shopIsVisible]);

  return (
    <StyledPaymentMethodsContainer>
      {!displayedPaymentMethods.length && <PaymentMethodsSkeleton />}
      {!!displayedPaymentMethods.length && (
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
