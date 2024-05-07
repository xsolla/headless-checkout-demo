import styled from 'styled-components';
import { graphikFontFamily } from '../../../shared/styled/graphik-font-family.const.ts';

export const StyledNavigation = styled.nav`
  flex-grow: 1;
  padding-left: 6px;

  ul {
    display: flex;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    padding: 7px 14px;
    margin: 0;
  }

  li.active {
    padding: 0;

    a {
      padding: 7px 14px;
      display: inline-block;
      color: #000;
      background-color: #fff;
      border-radius: 20px;
    }
  }

  a {
    user-select: none;
    font-family: ${graphikFontFamily};
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
  }
`;
