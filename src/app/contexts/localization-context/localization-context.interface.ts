import { Dispatch, SetStateAction } from 'react';
import { Lang } from '@xsolla/pay-station-sdk';

export interface ILocalizationContext {
  currentLocale: Lang;
  setCurrentLocale: Dispatch<SetStateAction<Lang>>;
}
