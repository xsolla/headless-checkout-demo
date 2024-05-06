import { SvgIcon } from '../../../../../components/svg-icon';
import { FC } from 'react';
import { StyledBackButton } from '../../../styled/back-button.styles.ts';

const backButtonUrl = `${import.meta.env.VITE_CDN_URL}/icons/common-icons/arrow-left--line.svg`;

export const BackButton: FC<{ onClick: () => void; className: string }> = ({
  onClick,
  className,
}) => {
  return (
    <StyledBackButton className={className} onClick={onClick}>
      <SvgIcon url={backButtonUrl} />
    </StyledBackButton>
  );
};
