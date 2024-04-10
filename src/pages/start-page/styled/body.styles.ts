import styled from 'styled-components';
import { screenXsMax } from '../../../shared/media-break-points.const.ts';

export const StyledBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 97px;

  @media (max-width: ${screenXsMax}) {
    height: 100%;
    padding-right: 5px;
    padding-left: 5px;
  }
`;
