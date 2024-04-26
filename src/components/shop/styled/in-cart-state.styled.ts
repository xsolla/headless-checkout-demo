import styled from 'styled-components';
import { graphikFontFamily } from '../../../shared/styled/graphik-font-family.const.ts';

export const StyledInCartState = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 0px;
  font-family: ${graphikFontFamily};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.5px;
  color: rgba(163, 245, 200, 1);
`;
