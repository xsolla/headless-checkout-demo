import styled from 'styled-components';
import { screenXsMax } from '../../../shared/media-break-points.const.ts';

export const StyledReturnLoader = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 210px;
  margin-bottom: 12px;
  padding: 48px;
  border-radius: 16px;
  background: rgba(16, 15, 22, 0.6);
  box-shadow: 0 1.92px 7.69px 0 rgba(0, 0, 0, 0.18);

  @media (max-width: ${screenXsMax}) {
    .status-image {
      display: none;
    }
  }
`;
