import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { StyledMoreMethodsButtonContainer } from '../../../styled/payment-methods.styles.ts';

export const MoreMethodsButton: FC<{ handleClick: () => void }> = ({ handleClick }) => {
  return (
    <StyledMoreMethodsButtonContainer>
      <button onClick={handleClick}>
        <FormattedMessage
          id={'store.page.payment-methods.more-button'}
          defaultMessage={'More button'}
        />
      </button>
    </StyledMoreMethodsButtonContainer>
  );
};
