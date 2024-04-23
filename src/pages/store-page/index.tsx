import React from 'react';
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

export function StorePage() {
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
