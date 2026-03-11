import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';

export const StyledBackButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;

  svg {
    &,
    & > * {
      width: 18px;
      height: 18px;
    }

    path {
      fill: ${colors.text.dark};
    }
  }
`;
