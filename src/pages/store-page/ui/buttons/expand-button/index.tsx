import { SvgIcon } from '../../../../../components/svg-icon';
import { FC } from 'react';
import { StyledExpandButton } from '../../../styled/expand-button.styles.ts';

const plusIconUrl = `${import.meta.env.VITE_CDN_URL}/icons/common-icons/plus--line.svg`;
const minusIconUrl = `${import.meta.env.VITE_CDN_URL}/icons/common-icons/minus--line.svg`;

export const ExpandButton: FC<{
  isExpanded: boolean;
  className: string;
}> = ({ isExpanded, className }) => {
  const iconUrl = isExpanded ? minusIconUrl : plusIconUrl;
  return (
    <StyledExpandButton className={className}>
      <SvgIcon url={iconUrl} />
    </StyledExpandButton>
  );
};
