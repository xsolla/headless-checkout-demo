import { Languages } from '../../localization/languages.enum.ts';
import { Dispatch, SetStateAction } from 'react';

export interface ILocalizationContext {
  currentLocale: Languages;
  setCurrentLocale: Dispatch<SetStateAction<Languages>>;
}
