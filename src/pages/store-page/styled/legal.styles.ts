import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';
import { aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledLegal = styled.div`
  font-family: ${aktivGroteskFontFamily};
  font-size: 14px;
  line-height: 18px;
  color: ${colors.content.tertiary};

  a {
    color: ${colors.control.link.primary};
    text-decoration: none;

    &:hover {
      color: ${colors.control.link.primaryHover};
    }
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
