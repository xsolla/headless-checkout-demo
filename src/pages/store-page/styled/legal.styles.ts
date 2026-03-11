import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';
import { pilatFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledLegal = styled.div`
  font-family: ${pilatFontFamily};
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);

  a {
    color: ${colors.control.primary.border};
    text-decoration: none;
  }

  .company {
    display: none;
  }

  .legal-links {
    display: flex;
    column-gap: 8px;
    margin-top: 20px;

    .divider {
      display: none;
    }
  }
`;
