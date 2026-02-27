import { StylesConfig } from 'react-select';
import { optionStyles } from './option-styles.ts';
import { desktopMin, laptopMin } from '../../shared/media-break-points.const.ts';
import { colors } from '@shared/colors.const.ts';

export const languageSelectorStylesConfig: StylesConfig = {
  option: (styles, { isFocused }) => ({
    ...styles,
    ...optionStyles,
    height: '40px',
    padding: '0 15px',
    background: isFocused ? colors.control.tertiary.bgOpacity : 'transparent',
    cursor: 'pointer',

    ':active': {
      background: colors.control.tertiary.bgOpacity,
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
    background:
      isFocused || menuIsOpen ? colors.control.tertiary.active.bg : colors.control.tertiary.bg,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor:
      isFocused || menuIsOpen
        ? colors.control.tertiary.active.border
        : colors.control.tertiary.border,
    borderRadius: '4px',
    cursor: 'pointer',

    ':hover': {
      background:
        isFocused || menuIsOpen
          ? colors.control.tertiary.active.bg
          : colors.control.tertiary.hover.bg,
      borderColor:
        isFocused || menuIsOpen
          ? colors.control.tertiary.active.border
          : colors.control.tertiary.hover.border,
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
    background: colors.bg.primary,
    padding: '0',
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
