import styled from 'styled-components';
import { screenXsMax, screenXsMin } from '../../../../../shared/media-break-points.const.ts';
export const StyledCartItemsContainer = styled.div`
  display: flex;
  gap: 12px;

  @media (min-width: ${screenXsMax}) {
    flex-direction: column;
  }

  @media (max-width: ${screenXsMax}) {
    justify-content: space-between;
  }

  @media (max-width: calc(${screenXsMin} - 1px)) {
    flex-wrap: wrap;
  }
`;
