import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '../components/layout';
import { NoMatch } from './not-found';
import React from 'react';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to='start-page' />,
      },
      {
        path: 'start-page',
        async lazy() {
          const { StartPage } = await import('../pages/start-page');
          return {
            Component: StartPage,
          };
        },
      },
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
]);
