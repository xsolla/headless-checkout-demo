import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { LocalizationContextProvider } from './app/contexts/localization-context/localization-context-provider.tsx';
import { SDKControlsGlobalStyles } from './styles/sdk-controls.styles.ts';

export default function App() {
  return (
    <Provider store={store}>
      <SDKControlsGlobalStyles />
      <LocalizationContextProvider>
        <RouterProvider router={router} />
      </LocalizationContextProvider>
    </Provider>
  );
}
