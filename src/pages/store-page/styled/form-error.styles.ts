import { colors } from '@shared/colors.const.ts';
import styled from 'styled-components';
import { aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledFormErrorContainer = styled.div`
  font-family: ${aktivGroteskFontFamily};
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  padding: 12px;
  border-radius: 8px;
  color: ${colors.content.alertPrimary};
  background: ${colors.background.alertSecondary};

  /* a,
  a:hover,
  a:visited {
    color: ${colors.control.alert.text.tertiary};
  } */
`;
