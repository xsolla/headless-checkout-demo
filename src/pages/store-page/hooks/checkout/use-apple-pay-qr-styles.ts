import { useEffect } from 'react';
import { headlessCheckout } from '@xsolla/pay-station-sdk';
import type { EventName } from '@xsolla/pay-station-sdk';

export function useApplePayQrStyles() {
  useEffect(() => {
    const addStylesForQrCode = () => {
      const iframe = document.querySelector('#apple-pay-iframe');
      if (iframe) {
        (iframe as HTMLElement).style.position = 'fixed';
      }
    };

    const unsubscribe = headlessCheckout.events.onCoreEvent(
      'applePayQrOpened' as unknown as EventName,
      () => null,
      addStylesForQrCode,
    );
    return () => {
      unsubscribe();
    };
  }, []);
}
