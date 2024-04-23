import { Languages } from '../../app/localization/languages.enum.ts';

export interface Language {
  currency: string;
  value: Languages;
  flag: string;
  label: string;
}
