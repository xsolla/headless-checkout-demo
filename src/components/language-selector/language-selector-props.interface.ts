import { Language } from './language.interface.ts';

export interface LanguageSelectorProps {
  onChange: (value: Language) => void;
}
