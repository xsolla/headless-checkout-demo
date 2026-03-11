import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';
import { tabletMin } from '@shared/media-break-points.const.ts';

export const StyledReturnLoader = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 210px;
  margin-bottom: 12px;
  padding: 48px;
  border-radius: 16px;
  background: ${colors.bg.secondary};
  box-shadow: 0 1.92px 7.69px 0 rgba(0, 0, 0, 0.08);

  .status-image {
    display: none;
  }

  @media (min-width: ${tabletMin}) {
    .status-image {
      display: block;
    }
  }
`;
