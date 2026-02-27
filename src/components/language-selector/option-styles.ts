import { colors } from '../../shared/colors.const';
import { desktopMin, laptopMin } from '../../shared/media-break-points.const';

export const optionStyles = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  color: colors.text.dark,
  fontFamily: 'AktivGrotesk, sans-serif',
  fontSize: '14px',
  fontWeight: '400',
  letterSpacing: '1%',
  lineHeight: '100%',

  [`@media (min-width: ${laptopMin})`]: {
    height: '44px',
    fontSize: '16px',
  },
  [`@media (min-width: ${desktopMin})`]: {
    height: '54px',
    fontSize: '20px',
  },
};
