import { FormattedMessage } from 'react-intl';
import { StyledQrCodeFormContainer } from '../../../styled/checkout/qr-code.styles.ts';
import { useAppSelector } from '../../../../../redux/hooks.ts';
import { selectIsSandbox } from '../../../../../redux/sdk-configuration';

export const QrForm = () => {
  const isSandbox = useAppSelector(selectIsSandbox);
  return (
    <>
      {!isSandbox && (
        <StyledQrCodeFormContainer>
          <div className={'description'}>
            <FormattedMessage
              id={'store.page.qr-code-form.description'}
              defaultMessage={
                'Open Alipay app on your device and scan the QR code to confirm the purchase. To check if the payment went through, click "Check status".'
              }
            />
          </div>
          <psdk-qr-code></psdk-qr-code>
        </StyledQrCodeFormContainer>
      )}
    </>
  );
};
