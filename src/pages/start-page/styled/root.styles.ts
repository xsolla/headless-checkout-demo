import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';
import { desktopMin, tabletMin } from '../../../shared/media-break-points.const.ts';

export const StyledRootDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0 8px 8px;
  background: ${colors.bg.primary};
  font-family: Pilat, sans-serif;
  overflow: hidden;

  @media (min-width: ${tabletMin}) {
    padding: 0 16px 16px;
  }

  @media (min-width: ${desktopMin}) {
    padding: 0 20px 20px;
  }
`;
