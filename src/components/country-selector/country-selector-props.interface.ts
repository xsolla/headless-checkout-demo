import { Country } from './country.interface.ts';

export interface CountrySelectorProps {
  onChangeCountry: (country: Country) => void;
}
