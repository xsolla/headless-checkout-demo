import styled from 'styled-components';
import { graphikFontFamily } from '../../../shared/styled/graphik-font-family.const.ts';

export const StyledBalance = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 8px;
  align-items: center;
  font-family: ${graphikFontFamily};
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;

  .icon {
    width: 30px;
    height: 30px;

    img {
      width: 100%;
      height: auto;
    }
  }
`;
