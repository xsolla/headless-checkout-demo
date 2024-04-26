import { Route, Routes } from 'react-router-dom';
import { StorePageRoutes } from '../../../routes/store-page/store-page-routes.enum.ts';
import { PaymentMethods } from '../ui/PaymentMethods.tsx';
import React from 'react';

export const PaymentDetailsRoutes = () => {
  return (
    <Routes>
      <Route path={StorePageRoutes.paymentMethods} element={<PaymentMethods />} />
    </Routes>
  );
};
