import styled from 'styled-components';
import { montserratFontFamily } from '../../../shared/styled/montserrat-font-family.const.ts';

export const StyledFormErrorContainer = styled.div`
  font-family: ${montserratFontFamily};
  font-size: 14px;
  line-height: 20px;
  padding: 12px;
  border-radius: 12px;
  color: rgba(255, 153, 172, 1);
  background: rgba(255, 51, 109, 0.35);

  a,
  a:hover,
  a:visited {
    color: rgba(255, 153, 172, 1);
  }
`;
