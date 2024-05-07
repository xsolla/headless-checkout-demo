import React, { useCallback, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { LanguageSelector } from '../../../../../components/language-selector';
import { LocalizationContext } from '../../../../../app/contexts/localization-context/localization-context.ts';
import { Language } from '../../../../../components/language-selector/language.interface.ts';

export const SelectLanguageWrapper = () => {
  const { setCurrentLocale } = useContext(LocalizationContext);

  const onChange = useCallback((language: Language) => setCurrentLocale(language.value), []);
  return (
    <div className='language-selector-wrapper'>
      <span className='language-label'>
        <FormattedMessage id={'start.page.language'} defaultMessage={'Language'}></FormattedMessage>
      </span>
      <LanguageSelector onChange={onChange} />
    </div>
  );
};
