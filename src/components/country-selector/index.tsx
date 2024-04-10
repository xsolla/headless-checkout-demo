import React from 'react';
import Select from 'react-select';
import * as countries from './countries.json';
import { Country } from './country.interface';
import { countrySelectorStylesConfig } from './styles-config.ts';
import { useIntl } from 'react-intl';
import { IconOption } from './ui/IconOption.tsx';
import { IconSingleValue } from './ui/IconSingleValue.tsx';
import { CustomIndicatorContainer } from './ui/CustomIndicatorContainer.tsx';
import { CountrySelectorProps } from './country-selector-props.interface.ts';

// @ts-expect-error @typescript-eslint/ban-ts-comment
const options = countries.default as Country[];

const defaultCountry: Country = {
  id_country: 3,
  value: 'us',
  aliases: 'United States',
  label: 'United States',
};
export const CountrySelector = (props: CountrySelectorProps) => {
  const intl = useIntl();
  const { onChangeCountry } = props;
  return (
    <Select
      defaultValue={defaultCountry}
      options={options}
      components={{
        Option: IconOption,
        SingleValue: IconSingleValue,
        IndicatorsContainer: CustomIndicatorContainer,
      }}
      styles={countrySelectorStylesConfig}
      menuPlacement='auto'
      onChange={onChangeCountry}
      noOptionsMessage={() => intl.formatMessage({ id: 'country-selector.not-found' })}
    />
  );
};
