import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '../components/layout';
import { NoMatch } from './not-found';
import React from 'react';
import { Routes } from './routes.enum.ts';

const innerRoutes = [
  {
    index: true,
    element: <Navigate to='start-page' />,
  },
  {
    path: Routes.startPage,
    async lazy() {
      const { StartPage } = await import('../pages/start-page');
      return {
        Component: StartPage,
      };
    },
  },
  {
    path: `${Routes.storePage}/*`,
    async lazy() {
      const { StorePage } = await import('../pages/store-page');
      return {
        Component: StorePage,
      };
    },
  },
  {
    path: '*',
    element: <NoMatch />,
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: innerRoutes,
  },
  // for application routes
  {
    path: 'app-integrations/single-spa-application-demo',
    element: <Layout />,
    children: innerRoutes,
  },
  // for parcel routes
  {
    path: 'app-integrations/single-spa-parcel-demo',
    element: <Layout />,
    children: innerRoutes,
  },
]);
