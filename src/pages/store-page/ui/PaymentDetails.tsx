import { StyledSectionTitle } from '../styled/root.styles.ts';
import React from 'react';
import { StyledPaymentDetails } from '../styled/payment-details.styles.ts';
import { FormattedMessage } from 'react-intl';

export const PaymentDetails = () => (
  <StyledPaymentDetails className='payment-details'>
    <StyledSectionTitle>
      <FormattedMessage
        id={'store.page.payments-details.title'}
        defaultMessage={'Payment details'}
      ></FormattedMessage>
    </StyledSectionTitle>
  </StyledPaymentDetails>
);
