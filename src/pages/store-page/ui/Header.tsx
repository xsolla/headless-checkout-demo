import React from 'react';
import balanceIcon from '../../../assets/gold.png';
import menuIcon from '../../../assets/menu-icon.svg';
import { User } from './User.tsx';
import { Navigation } from './Navigation.tsx';
import { StyledDesktopHeader, StyledMobileHeader } from '../styled/header.styles.ts';
import { StyledMenuButton } from '../styled/menu-button.styles.ts';
import { StyledBalance } from '../styled/balance.styles.ts';
import { useIntl } from 'react-intl';

export const Header = () => {
  const intl = useIntl();
  const imgAlt = intl.formatMessage({ id: 'store.page.balance' });
  return (
    <>
      <StyledDesktopHeader>
        <Navigation />
        <StyledBalance>
          <span className='icon'>
            <img src={balanceIcon} alt={imgAlt} />
          </span>
          <span>10 000</span>
        </StyledBalance>
        <User />
      </StyledDesktopHeader>

      <StyledMobileHeader>
        <StyledMenuButton>
          <img src={menuIcon} />
        </StyledMenuButton>
        <User></User>
      </StyledMobileHeader>
    </>
  );
};
