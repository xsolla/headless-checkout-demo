import React from 'react';
import { ILocalizationContext } from './localization-context.interface.ts';

export const LocalizationContext = React.createContext<ILocalizationContext>(
  {} as ILocalizationContext,
);
