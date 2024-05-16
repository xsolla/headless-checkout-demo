import { headlessCheckout } from '@xsolla/pay-station-sdk';

export const setSecureComponentStyles = (styles: string) => {
  return headlessCheckout.setSecureComponentStyles(styles);
};
