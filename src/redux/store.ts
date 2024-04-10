import { configureStore } from '@reduxjs/toolkit';
import country from './country';
import token from './token';
import sandbox from './sandbox';

export const store = configureStore({
  reducer: {
    country,
    token,
    sandbox,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
