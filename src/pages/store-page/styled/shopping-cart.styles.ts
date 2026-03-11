import styled from 'styled-components';
import { tabletMin } from '@shared/media-break-points.const.ts';

export const StyledShoppingCart = styled.section`
  max-width: 100%;
  width: 100%;
  margin-right: 0;
  margin-bottom: 32px;

  .cart {
    margin-bottom: 20px;
  }

  .shop {
    display: none;
  }

  @media (min-width: ${tabletMin}) {
    width: auto;
    margin-right: initial;
    margin-bottom: 0;

    .shop {
      display: block;
    }
  }
`;
