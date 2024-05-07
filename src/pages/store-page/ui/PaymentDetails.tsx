import { StyledSectionTitle } from '../styled/root.styles.ts';
import React from 'react';
import { StyledPaymentDetails } from '../styled/payment-details.styles.ts';
import { FormattedMessage } from 'react-intl';
import { StyledLegal } from '../styled/legal.styles.ts';
import { PaymentDetailsRoutes } from '../routes/payment-details-routes.tsx';

export const PaymentDetails = () => {
  return (
    <StyledPaymentDetails className='payment-details'>
      <StyledSectionTitle>
        <FormattedMessage
          id={'store.page.payments-details.title'}
          defaultMessage={'Payment details'}
        ></FormattedMessage>
      </StyledSectionTitle>
      <PaymentDetailsRoutes />
      <StyledLegal>
        <psdk-legal></psdk-legal>
      </StyledLegal>
    </StyledPaymentDetails>
  );
};
