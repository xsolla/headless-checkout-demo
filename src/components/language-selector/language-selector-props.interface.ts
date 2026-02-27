import { Language } from './language.interface.ts';
import { Lang } from '@xsolla/pay-station-sdk';

export interface LanguageSelectorProps {
  onChange: (value: Language) => void;
  currentLocale?: Lang;
}
