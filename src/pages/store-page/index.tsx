import React, { useEffect, useState } from 'react';
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
import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { createToken, selectToken } from '../../redux/sdk-configuration';
import { getUrlSearchParameter } from '../../shared/get-url-search-parameter.function.ts';
import { selectShopVisibility } from '../../redux/shop';
import { useNavigate, useSearchParams } from 'react-router-dom';

export function StorePage() {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const tokenFromUrl = getUrlSearchParameter('token');
  const shopIsVisible = useAppSelector(selectShopVisibility);
  const [shopClassName, setShopClassName] = useState('');

  useEffect(() => {
    if (tokenFromUrl) {
      dispatch(createToken({ tokenFromUrl }));
    }
    if (!token) {
      navigate({ pathname: '/start-page', search: params.toString() });
    }
  }, [tokenFromUrl]);

  useEffect(() => {
    setShopClassName(shopIsVisible ? 'with-shop' : 'without-shop');
  }, [shopIsVisible]);

  return (
    <StyledRootDiv>
      <StyledContentContainer>
        <Header />
        <StyledMain>
          <StoreTitle className={shopClassName}>
            <FormattedMessage id={'store.page.title'} defaultMessage={'Store'}></FormattedMessage>
          </StoreTitle>
          <StyledColumns className={shopClassName}>
            <div className='cart-column'>
              <ShoppingCart></ShoppingCart>
            </div>
            <div className='payment-details-column'>
              <PaymentDetails></PaymentDetails>
            </div>
          </StyledColumns>
        </StyledMain>
      </StyledContentContainer>
      <StyledOverlayDiv></StyledOverlayDiv>
      <StyledMobileSecondOverlayDiv></StyledMobileSecondOverlayDiv>
    </StyledRootDiv>
  );
}
