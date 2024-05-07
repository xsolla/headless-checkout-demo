import { FC } from 'react';
import { StyledPaymentMethodContainer } from '../../../styled/root.styles.ts';
import { BrandLogoIcon } from '../../../../../components/brand-logo-icon';
import { SvgIcon } from '../../../../../components/svg-icon';

const plusIconUrl = `${import.meta.env.VITE_CDN_URL}/icons/common-icons/plus--line.svg`;
const minusIconUrl = `${import.meta.env.VITE_CDN_URL}/icons/common-icons/minus--line.svg`;

export const PaymentMethod: FC<{
  name: string;
  iconName: string | null;
  pid: number;
  isExpanded: boolean;
  handleCLick: () => void;
}> = ({ iconName, name, pid, isExpanded, handleCLick }) => {
  const iconUrl = isExpanded ? minusIconUrl : plusIconUrl;
  return (
    <StyledPaymentMethodContainer>
      <BrandLogoIcon name={iconName} pid={pid} />
      <div className={'name'}>{name}</div>
      <button className={'expand-button'} onClick={handleCLick}>
        <SvgIcon url={iconUrl} />
      </button>
    </StyledPaymentMethodContainer>
  );
};
