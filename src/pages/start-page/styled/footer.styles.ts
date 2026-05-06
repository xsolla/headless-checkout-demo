import styled from 'styled-components';
import { desktopMin, laptopMin, tabletMin } from '../../../shared/media-break-points.const.ts';

export const StyledFooter = styled.div`
  flex-shrink: 0;
  width: 100%;
  background: #f5f6f4;
  padding: 8px;
  margin-top: 4px;

  @media (min-width: ${tabletMin}) {
    padding: 16px;
  }

  @media (min-width: ${desktopMin}) {
    margin-top: 6px;
    padding: 20px;
  }
`;

export const StyledFooterText = styled.p`
  width: 100%;
  margin: 0;
  padding-bottom: 32px;
  font-size: 18px;
  font-weight: 350;
  line-height: 105%;
  color: #000;

  @media (min-width: ${tabletMin}) {
    width: 70%;
    font-size: 20px;
  }

  @media (min-width: ${laptopMin}) {
    width: 40%;
    padding-bottom: 100px;
    font-size: 24px;
  }

  @media (min-width: ${desktopMin}) {
    width: 40%;
    padding-bottom: 128px;
    font-size: 30px;
  }
`;

export const StyledFooterSelectWrapper = styled.div`
  margin-bottom: 4px;

  @media (min-width: ${tabletMin}) {
    width: 360px;
  }

  @media (min-width: ${laptopMin}) {
    display: none;
  }
`;
