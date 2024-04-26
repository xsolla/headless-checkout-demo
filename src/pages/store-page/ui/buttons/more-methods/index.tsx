import { StyledMoreMethodsButtonContainer } from '../../../styled/root.styles.ts';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

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
