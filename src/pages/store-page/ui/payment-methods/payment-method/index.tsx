import { FC } from 'react';
import { BrandLogoIcon } from '../../../../../components/brand-logo-icon';
import { Checkout } from '../../checkout';
import { StyledPaymentMethodContainer } from '../../../styled/payment-methods.styles.ts';
import { useAppSelector } from '../../../../../redux/hooks.ts';
import { selectPaymentFormSettings } from '../../../../../redux/payment-form';
import { ExpandButton } from '../../buttons/expand-button';

export const PaymentMethod: FC<{
  name: string;
  iconName: string | null;
  pid: number;
  isExpanded: boolean;
  handleCLick: () => void;
}> = ({ iconName, name, pid, isExpanded, handleCLick }) => {
  const { isSecondStep, isFetching } = useAppSelector(selectPaymentFormSettings);

  return (
    <StyledPaymentMethodContainer $isFetching={isFetching}>
      {!isSecondStep && (
        <div className={'payment-method'} onClick={handleCLick}>
          <BrandLogoIcon name={iconName} pid={pid} />
          <div className={'name'}>{name}</div>
          <ExpandButton isExpanded={isExpanded} className={'expand-button'} />
        </div>
      )}
      {isExpanded && <Checkout />}
    </StyledPaymentMethodContainer>
  );
};
