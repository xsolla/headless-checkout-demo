import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';
import { aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledNavigation = styled.nav`
  flex-grow: 1;

  ul {
    height: 40px;
    display: flex;
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin: 0;
    cursor: pointer;
  }

  li.active {
    padding: 0;

    a {
      padding: 7px 14px;
      color: ${colors.content.brandPrimary};
    }
  }

  a {
    user-select: none;
    font-family: ${aktivGroteskFontFamily};
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    color: ${colors.content.primary};
  }
`;
