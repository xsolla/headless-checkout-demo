import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';
import { desktopMin, laptopMin, tabletMin } from '../../../shared/media-break-points.const.ts';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  width: 100%;
  height: 64px;
  background: ${colors.bg.primary};

  @media (min-width: ${tabletMin}) {
    height: 64px;
  }

  @media (min-width: ${laptopMin}) {
    height: 70px;
  }

  @media (min-width: ${desktopMin}) {
    height: 88px;
  }
`;

export const StyledHeaderIconWrapper = styled.div`
  width: 155px;
  height: 32px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${tabletMin}) {
    width: 184px;
    height: 38px;
  }

  @media (min-width: ${desktopMin}) {
    width: 232px;
    height: 48px;
  }
`;

export const StyledHeaderSelectWrapper = styled.div`
  display: none;

  @media (min-width: ${laptopMin}) {
    display: block;
    width: 200px;
  }

  @media (min-width: ${desktopMin}) {
    width: 250px;
  }
`;
