import { colors } from '@shared/colors.const';
import styled from 'styled-components';
import { tabletMin } from '@shared/media-break-points.const.ts';

export const StyledDesktopHeader = styled.header`
  position: sticky;
  top: 0;
  display: none;
  align-items: center;
  gap: 8px;
  height: 64px;
  padding: 16px;
  background: ${colors.background.primary};
  z-index: 2;

  @media (min-width: ${tabletMin}) {
    display: flex;
  }
`;

export const StyledMobileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;

  @media (min-width: ${tabletMin}) {
    display: none;
  }
`;
