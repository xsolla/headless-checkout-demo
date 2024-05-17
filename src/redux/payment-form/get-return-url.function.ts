import { Routes } from '../../routes/routes.enum.ts';
import { StorePageRoutes } from '../../routes/store-page/store-page-routes.enum.ts';

export const getReturnUrl = (isSandbox?: boolean): string => {
  const returnUrl = new URL(window.location.href);
  returnUrl.pathname = `/${Routes.storePage}/${StorePageRoutes.return}`;
  returnUrl.search = '';
  if (isSandbox) {
    returnUrl.search = 'sandbox=1';
  }
  return returnUrl.toString();
};
