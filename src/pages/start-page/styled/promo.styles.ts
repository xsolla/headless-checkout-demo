import styled from 'styled-components';
import { tabletMin, laptopMin, desktopMin } from '../../../shared/media-break-points.const.ts';
import { colors } from '@shared/colors.const.ts';

export const StyledPromo = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  padding: 8px;
  overflow: hidden;

  @media (min-width: ${tabletMin}) {
    padding: 16px;
  }

  @media (min-width: ${desktopMin}) {
    padding: 20px;
  }
`;

export const StyledPromoBgImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
  z-index: 0;

  @media (min-width: ${tabletMin}) {
    object-position: center center;
  }
`;

export const StyledPromoTitle = styled.h1`
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 0;
  font-weight: 300;
  color: ${colors.text.light};
  line-height: 90%;
  font-size: 48px;
  letter-spacing: -4%;
  word-break: keep-all;
  line-break: strict;
  overflow-wrap: break-word;

  @media (min-width: ${tabletMin}) {
    font-size: 72px;
  }

  @media (min-width: ${laptopMin}) {
    font-size: 94px;
  }

  @media (min-width: ${desktopMin}) {
    font-size: 118px;
  }
`;

export const StyledPromoBadge = styled.div`
  position: relative;
  z-index: 1;
  margin-top: auto;
  display: flex;
  align-self: flex-start;
  align-items: center;
  background: ${colors.brand.mindaro.m11};
`;

export const StyledBadgeLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background: ${colors.brand.mindaro.m9};

  @media (min-width: ${laptopMin}) {
    width: 30px;
    height: 30px;
  }

  @media (min-width: ${desktopMin}) {
    width: 37px;
    height: 37px;
  }
`;

export const StyledBadgeIconWrapper = styled.div`
  width: 22px;
  height: 19px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${laptopMin}) {
    width: 26px;
    height: 22px;
  }

  @media (min-width: ${desktopMin}) {
    width: 32px;
    height: 28px;
  }
`;

export const StyledBadgeText = styled.div`
  padding: 0 6px;
  color: ${colors.text.dark};
  font-weight: 350;
  font-size: 18px;
  line-height: 100%;

  @media (min-width: ${laptopMin}) {
    padding: 0 8px;
    font-size: 20px;
  }

  @media (min-width: ${desktopMin}) {
    padding: 0 10px;
    font-size: 25px;
  }
`;
