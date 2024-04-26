import React from 'react';
import { StyledFinanceDetails } from '../styled/finance-details.styled.ts';
export const FinanceDetails = () => {
  return (
    <StyledFinanceDetails>
      <psdk-finance-details></psdk-finance-details>
      <psdk-total></psdk-total>
    </StyledFinanceDetails>
  );
};
