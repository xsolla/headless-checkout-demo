import React from 'react';
import { FormattedMessage } from 'react-intl';
import Coins from '../../../assets/coin.svg';
import { SelectCountryWrapper } from './SelectCountryWrapper.tsx';
import { OpenDemoButton } from './OpenDemoButton.tsx';
import { StyledLeftColumn } from '../styled/left-column.styles.ts';

export const LeftColumn = () => (
  <StyledLeftColumn>
    <p className='label'>
      <FormattedMessage id={'start.page.demo'} defaultMessage={'demo'}></FormattedMessage>
    </p>
    <h1 className='title'>
      <span className='title-text'>
        <FormattedMessage
          id={'start.page.title'}
          defaultMessage={'Headless Checkout'}
        ></FormattedMessage>
      </span>
      <span className='title-image'>
        <img src={Coins} alt=''></img>
      </span>
    </h1>
    <p className='capture'>
      <FormattedMessage
        id={'start.page.capture'}
        defaultMessage={
          'Get maximum control over the payment flow and customize the layout, fields, and styles to match your game or store design'
        }
      ></FormattedMessage>
    </p>
    <SelectCountryWrapper />
    <OpenDemoButton />
  </StyledLeftColumn>
);
