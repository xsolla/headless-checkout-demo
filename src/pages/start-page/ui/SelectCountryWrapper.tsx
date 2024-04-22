import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { CountrySelector } from '../../../components/country-selector';
import { useAppDispatch } from '../../../redux/hooks.ts';
import { Country } from '../../../components/country-selector/country.interface.ts';
import { setCountry } from '../../../redux/country';

export const SelectCountryWrapper = () => {
  const dispatch = useAppDispatch();

  const handleChange = useCallback((country: Country) => {
    dispatch(setCountry(country.value));
  }, []);
  return (
    <div className='country-selector-wrapper'>
      <span className='country-label'>
        <FormattedMessage
          id={'start.page.country'}
          defaultMessage={'Country or region'}
        ></FormattedMessage>
      </span>
      <CountrySelector onChangeCountry={handleChange} />
    </div>
  );
};
