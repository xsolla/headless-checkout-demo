import styled from 'styled-components';
import { screenXsMax } from '../../../shared/media-break-points.const.ts';

export const StyledShoppingCart = styled.section`
  max-width: 600px;
  width: 52%;
  margin-right: 3.6%;

  @media (max-width: ${screenXsMax}) {
    max-width: 100%;
    width: 100%;
    margin-right: 0;
    margin-bottom: 32px;
  }
`;
