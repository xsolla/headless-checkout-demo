import React from 'react';
import Logo from '../../../assets/logo.svg';
import { StyledHeader, StyledLogo } from '../styled/header.styles.ts';

export const Header = () => (
  <StyledHeader>
    <StyledLogo>
      <img src={Logo} alt=''></img>
    </StyledLogo>
    <p className='company'>Xsolla</p>
  </StyledHeader>
);
