import { FC } from 'react';
import { StyledSubmitButtonContainer } from '../../../styled/checkout/checkout.styles.ts';
import { useIntl } from 'react-intl';
import { SvgIcon } from '../../../../../components/svg-icon/index.tsx';
import Dron from '../../../../../assets/icons/brand-icon.svg';
import { useApplePayQrStyles } from '../../../hooks/checkout/use-apple-pay-qr-styles.ts';

export const SubmitButton: FC<{ text?: string; className?: string; isLoading?: boolean }> = ({
  text,
  className,
  isLoading,
}) => {
  const intl = useIntl();

  useApplePayQrStyles();

  return (
    <StyledSubmitButtonContainer className={className}>
      <psdk-submit-button
        isLoading={isLoading}
        text={
          text ||
          intl.formatMessage({ id: 'store.page.checkout.pay-now', defaultMessage: 'Pay now' })
        }
      ></psdk-submit-button>
      {!isLoading && (
        <div className='brand-icon-wrapper'>
          <SvgIcon url={Dron} />
        </div>
      )}
    </StyledSubmitButtonContainer>
  );
};
