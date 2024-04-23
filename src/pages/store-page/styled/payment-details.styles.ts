import styled from 'styled-components';
import { screenXsMax } from '../../../shared/media-break-points.const.ts';

export const StyledPaymentDetails = styled.section`
  max-width: 500px;
  width: 43%;

  @media (max-width: ${screenXsMax}) {
    max-width: 100%;
    width: 100%;
  }
`;
