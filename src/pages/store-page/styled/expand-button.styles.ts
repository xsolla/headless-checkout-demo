import { colors } from '@shared/colors.const.ts';
import styled from 'styled-components';

export const StyledExpandButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  svg {
    transition: all 0.3s ease;

    path {
      fill: ${colors.content.tertiary};
    }
  }
`;
