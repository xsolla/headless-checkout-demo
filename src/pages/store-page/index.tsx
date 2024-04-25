import React, { useEffect } from 'react';
import {
  StoreTitle,
  StyledColumns,
  StyledContentContainer,
  StyledMain,
  StyledRootDiv,
} from './styled/root.styles.ts';
import { Header } from './ui/Header.tsx';
import { ShoppingCart } from './ui/ShoppingCart.tsx';
import { PaymentDetails } from './ui/PaymentDetails.tsx';
import { StyledMobileSecondOverlayDiv, StyledOverlayDiv } from './styled/overlays.styles.ts';
import { FormattedMessage } from 'react-intl';
import { useAppDispatch } from '../../redux/hooks.ts';
import { createToken } from '../../redux/sdk-configuration';
import { getUrlSearchParameter } from '../../shared/get-url-search-parameter.function.ts';

export function StorePage() {
  const dispatch = useAppDispatch();
  const tokenFromUrl = getUrlSearchParameter('token');

  useEffect(() => {
    if (tokenFromUrl) {
      dispatch(createToken({ tokenFromUrl }));
    }
  }, []);
  return (
    <StyledRootDiv>
      <StyledContentContainer>
        <Header />
        <StyledMain>
          <StoreTitle>
            <FormattedMessage id={'store.page.title'} defaultMessage={'Store'}></FormattedMessage>
          </StoreTitle>
          <StyledColumns>
            <ShoppingCart></ShoppingCart>
            <PaymentDetails></PaymentDetails>
          </StyledColumns>
        </StyledMain>
      </StyledContentContainer>
      <StyledOverlayDiv></StyledOverlayDiv>
      <StyledMobileSecondOverlayDiv></StyledMobileSecondOverlayDiv>
    </StyledRootDiv>
  );
}
