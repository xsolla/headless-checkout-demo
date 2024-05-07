import React from 'react';
import Select from 'react-select';
import * as languages from './languages.json';
import { languageSelectorStylesConfig } from './styles-config.ts';
import { useIntl } from 'react-intl';
import { IconOption } from './ui/IconOption.tsx';
import { IconSingleValue } from './ui/IconSingleValue.tsx';
import { CustomIndicatorContainer } from './ui/CustomIndicatorContainer.tsx';
import { LanguageSelectorProps } from './language-selector-props.interface.ts';
import { Language } from './language.interface.ts';
import { Lang } from '@xsolla/pay-station-sdk';

// @ts-expect-error @typescript-eslint/ban-ts-comment
const options = languages.default as Language[];

const defaultLanguage: Language = {
  currency: 'USD',
  value: Lang.EN,
  flag: 'us',
  label: 'English',
};
export const LanguageSelector = (props: LanguageSelectorProps) => {
  const intl = useIntl();
  const { onChange } = props;
  return (
    <Select
      defaultValue={defaultLanguage}
      options={options}
      components={{
        Option: IconOption,
        SingleValue: IconSingleValue,
        IndicatorsContainer: CustomIndicatorContainer,
      }}
      styles={languageSelectorStylesConfig}
      menuPlacement='auto'
      onChange={onChange}
      noOptionsMessage={() => intl.formatMessage({ id: 'language-selector.not-found' })}
    />
  );
};
