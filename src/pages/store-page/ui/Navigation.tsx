import React from 'react';
import { StyledNavigation } from '../styled/navigation.styles.ts';
import { FormattedMessage } from 'react-intl';

export const Navigation = () => (
  <StyledNavigation>
    <ul>
      <li>
        <a>
          <FormattedMessage
            id={'store.page.navigation.gifts'}
            defaultMessage={'Gifts'}
          ></FormattedMessage>
        </a>
      </li>
      <li className='active'>
        <a>
          <FormattedMessage
            id={'store.page.navigation.special-offers'}
            defaultMessage={'Special offers'}
          ></FormattedMessage>
        </a>
      </li>
      <li>
        <a>
          <FormattedMessage
            id={'store.page.navigation.jems'}
            defaultMessage={'Jems'}
          ></FormattedMessage>
        </a>
      </li>
      <li>
        <a>
          <FormattedMessage
            id={'store.page.navigation.web-coins'}
            defaultMessage={'Web coins'}
          ></FormattedMessage>
        </a>
      </li>
    </ul>
  </StyledNavigation>
);
