import styled from 'styled-components';
import { graphikFontFamily } from '../../../shared/styled/graphik-font-family.const.ts';

export const StyledRemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 12px;
  border-radius: 8px;
  color: rgba(135, 107, 250, 1);
  border: 1px solid rgba(105, 57, 249, 1);
  background: transparent;

  font-family: ${graphikFontFamily};
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  cursor: pointer;
`;
