import styled from 'styled-components';
import { aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledFormErrorContainer = styled.div`
  font-family: ${aktivGroteskFontFamily};
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  padding: 12px;
  border-radius: 8px;
  color: #e84f30;
  background: #ffbfb2;

  a,
  a:hover,
  a:visited {
    color: rgba(180, 30, 60, 1);
  }
`;
