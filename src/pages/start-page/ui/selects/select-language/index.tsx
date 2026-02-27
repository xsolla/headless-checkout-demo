import React, { useCallback, useContext } from 'react';
import { LanguageSelector } from '../../../../../components/language-selector';
import { LocalizationContext } from '../../../../../app/contexts/localization-context/localization-context.ts';
import { Language } from '../../../../../components/language-selector/language.interface.ts';

export const SelectLanguageWrapper = () => {
  const { currentLocale, setCurrentLocale } = useContext(LocalizationContext);

  const onChange = useCallback((language: Language) => setCurrentLocale(language.value), []);
  return <LanguageSelector onChange={onChange} currentLocale={currentLocale} />;
};
