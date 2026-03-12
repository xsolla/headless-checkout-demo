import styled from 'styled-components';
import { tabletMin } from '@shared/media-break-points.const.ts';

export const StyledCartItemsContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: ${tabletMin}) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
