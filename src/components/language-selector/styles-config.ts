import { StylesConfig } from 'react-select';
import { optionStyles } from './option-styles.ts';
import { desktopMin, laptopMin } from '../../shared/media-break-points.const.ts';

export const languageSelectorStylesConfig: StylesConfig = {
  option: (styles, { isFocused }) => ({
    ...styles,
    ...optionStyles,
    height: '40px',
    padding: '0 15px',
    background: isFocused ? 'rgba(221, 223, 216, 0.15)' : 'transparent',
    cursor: 'pointer',

    ':active': {
      background: 'rgba(221, 223, 216, 0.15)',
    },
  }),
  singleValue: (styles) => ({
    ...styles,
    ...optionStyles,
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: '0',
  }),
  input: (styles) => ({
    ...styles,
    ...optionStyles,
  }),
  noOptionsMessage: (styles) => ({
    ...styles,
    ...optionStyles,
  }),
  control: (styles, { isFocused, menuIsOpen }) => ({
    ...styles,
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '15px',
    paddingRight: '15px',
    background: isFocused || menuIsOpen ? 'rgba(128, 234, 255, 0.15)' : '#ecede9',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: isFocused || menuIsOpen ? '#80eaff' : '#dddfd8',
    borderRadius: '4px',
    cursor: 'pointer',

    ':hover': {
      background: isFocused || menuIsOpen ? 'rgba(128, 234, 255, 0.15)' : '#dddfd8',
      borderColor: isFocused || menuIsOpen ? '#80eaff' : '#c2c4ba',
    },

    [`@media (min-width: ${laptopMin})`]: {
      height: '44px',
      paddingLeft: '16px',
      paddingRight: '16px',
      fontSize: '16px',
      borderRadius: '6px',
    },
    [`@media (min-width: ${desktopMin})`]: {
      height: '54px',
      paddingLeft: '20px',
      paddingRight: '20px',
      fontSize: '20px',
      borderRadius: '8px',
    },
  }),
  menu: (styles) => ({
    ...styles,
    padding: '0',
    background: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: '4px',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
    marginTop: '4px',
    overflow: 'hidden',

    [`@media (min-width: ${laptopMin})`]: {
      borderRadius: '6px',
    },
    [`@media (min-width: ${desktopMin})`]: {
      borderRadius: '8px',
    },
  }),
  menuList: (styles) => ({
    ...styles,
    maxHeight: '500px',
    padding: '0',
    scrollbarWidth: 'none',
    '::-webkit-scrollbar-thumb': {
      border: '1px solid transparent',
      borderRadius: '4px',
      background: 'rgba(0, 0, 0, 0.1)',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};
