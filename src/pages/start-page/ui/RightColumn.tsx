import React from 'react';
import HeadlessCheckout from '../../../assets/headless-checkout.png';
import { StyledRightColumn } from '../styled/right-column.styles.ts';

export const RightColumn = () => (
  <StyledRightColumn>
    <div className='headless-img'>
      <img src={HeadlessCheckout} alt=''></img>
    </div>
    <div className='overlay'></div>
    <div className='overlay-1'></div>
    <div className='overlay-2'></div>
  </StyledRightColumn>
);
