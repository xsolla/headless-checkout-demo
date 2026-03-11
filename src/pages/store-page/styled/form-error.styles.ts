import styled from 'styled-components';
import { pilatFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledFormErrorContainer = styled.div`
  font-family: ${pilatFontFamily};
  font-size: 14px;
  line-height: 20px;
  padding: 12px;
  border-radius: 12px;
  color: rgba(180, 30, 60, 1);
  background: rgba(255, 51, 109, 0.1);

  a,
  a:hover,
  a:visited {
    color: rgba(180, 30, 60, 1);
  }
`;
