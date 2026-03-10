import styled from 'styled-components';
import { montserratFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledLegal = styled.div`
  font-family: ${montserratFontFamily};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);

  a {
    color: rgba(210, 206, 254, 1);
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
