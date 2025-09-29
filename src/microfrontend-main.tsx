import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App.tsx';
import singleSpaReact from 'single-spa-react';

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  // @ts-expect-error incorrect return
  errorBoundary(err, info) {
    console.log('headless checkout demo err:', err);
    console.log('headless checkout demo info:', info);
    return null;
  },
});
