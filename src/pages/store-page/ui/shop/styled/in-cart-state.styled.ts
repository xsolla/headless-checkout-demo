import styled from 'styled-components';
import { aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledInCartState = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-family: ${aktivGroteskFontFamily};
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #3dc322;
`;
