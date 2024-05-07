import { FC, SetStateAction, useEffect, useState } from 'react';
import { BrandLogoIconContainer } from './root.styles.ts';
import { SvgIcon } from '../svg-icon';
import { creditCardId, mobileId } from '../../shared/payment/payment-methods-ids.const.ts';

export const BrandLogoIcon: FC<{ name: string | null; pid: number }> = ({ name, pid }) => {
  const [isDefaultIcon, setIsDefaultIcon] = useState(!name);
  const [url, setUrl] = useState('');

  useEffect(() => {
    let iconUrl: SetStateAction<string>;

    if (pid === creditCardId) {
      iconUrl = `${import.meta.env.VITE_CDN_URL}/icons/common-icons/bank-card--line.svg`;
    } else if (pid === mobileId) {
      setIsDefaultIcon(true);
      iconUrl = `${import.meta.env.VITE_CDN_URL}/icons/common-icons/mobile--line.svg`;
    } else {
      iconUrl = name
        ? `${import.meta.env.VITE_CDN_URL}/icons/brand-logos/${name}`
        : `${import.meta.env.VITE_CDN_URL}/icons/common-icons/bank--line.svg`;
    }
    setUrl(iconUrl);
  }, [name, pid]);

  return (
    <BrandLogoIconContainer $isDefaultIcon={isDefaultIcon}>
      <SvgIcon url={url} />
    </BrandLogoIconContainer>
  );
};
