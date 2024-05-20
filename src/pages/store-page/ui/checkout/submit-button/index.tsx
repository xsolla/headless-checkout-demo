import { FC } from 'react';
import { StyledSubmitButtonContainer } from '../../../styled/checkout/checkout.styles.ts';
import { useIntl } from 'react-intl';

export const SubmitButton: FC<{ text?: string; className?: string; isLoading?: boolean }> = ({
  text,
  className,
  isLoading,
}) => {
  const intl = useIntl();
  return (
    <StyledSubmitButtonContainer className={className}>
      <psdk-submit-button
        isLoading={isLoading}
        text={
          text ||
          intl.formatMessage({ id: 'store.page.checkout.pay-now', defaultMessage: 'Pay now' })
        }
      ></psdk-submit-button>
    </StyledSubmitButtonContainer>
  );
};
