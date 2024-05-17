import { Route, Routes } from 'react-router-dom';
import { StorePageRoutes } from '../../../routes/store-page/store-page-routes.enum.ts';
import { PaymentMethods } from '../ui/payment-methods';
import React from 'react';
import { PaymentStatus } from '../ui/payment-status';
import { Return } from '../ui/return';

export const PaymentDetailsRoutes = () => {
  return (
    <Routes>
      <Route path={StorePageRoutes.paymentMethods} element={<PaymentMethods />} />
      <Route path={StorePageRoutes.status} element={<PaymentStatus />} />
      <Route path={StorePageRoutes.return} element={<Return />} />
    </Routes>
  );
};
