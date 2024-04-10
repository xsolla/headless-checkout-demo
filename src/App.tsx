import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout.tsx';
import { NoMatch } from './routes/not-found';
import { Home } from './routes/home';
import { LocalizationContextProvider } from './app/contexts/localization-context/localization-context-provider.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
]);

export default function App() {
  return (
    <LocalizationContextProvider>
      <RouterProvider router={router} />
    </LocalizationContextProvider>
  );
}
