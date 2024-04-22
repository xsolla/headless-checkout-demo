import { StylesConfig } from 'react-select';
import { optionStyles } from './option-styles.ts';

export const countrySelectorStylesConfig: StylesConfig = {
  option: (styles, { isFocused }) => ({
    ...styles,
    ...optionStyles,
    background: isFocused ? 'rgba(65, 57, 96, 0.3)' : 'transparent',
    cursor: 'pointer',
    ':active': {
      background: 'rgba(65, 57, 96, 0.3)',
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
  control: (styles, { isFocused }) => ({
    ...styles,
    background: 'rgba(255, 255, 255, .07)',
    height: '48px',
    paddingLeft: '14px',
    paddingRight: '5px',
    border: '1px solid rgba(255, 255, 255, .05)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 0,
    cursor: 'pointer',
    borderColor: isFocused ? 'red' : 'rgba(255, 255, 255, .05)',
  }),
  menu: (styles) => ({
    ...styles,
    background: 'rgb(7, 7, 8)',
    padding: '8px 0',
    border: '1px solid rgba(255, 255, 255, .05)',
    boxShadow: '0px 6px 10px 4px rgba(7, 7, 8, 0.1), 0px 2px 3px rgba(7, 7, 8, 0.2)',
  }),
  menuList: (styles) => ({
    ...styles,
    scrollbarWidth: 'none',
    '::-webkit-scrollbar-thumb': {
      border: '1px solid transparent',
      borderRadius: '4px',
      background: 'rgba(0, 0, 0, 0.15)',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};
