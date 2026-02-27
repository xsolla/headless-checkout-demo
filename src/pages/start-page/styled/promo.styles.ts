import styled from 'styled-components';
import startPageBgMobile from '../../../assets/images/start-page-bg-mobile.webp';
import startPageBgTablet from '../../../assets/images/start-page-bg-tablet.webp';
import startPageBgLaptop from '../../../assets/images/start-page-bg-laptop.webp';
import startPageBgDesktop from '../../../assets/images/start-page-bg-desktop.webp';
import { tabletMin, laptopMin, desktopMin } from '../../../shared/media-break-points.const.ts';
import { colors } from '@shared/colors.const.ts';

export const StyledPromo = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  padding: 8px;
  background: url(${startPageBgMobile}) center / cover no-repeat;
  background-position-x: left;

  @media (min-width: ${tabletMin}) {
    padding: 16px;
    background-image: url(${startPageBgTablet});
    background-position-x: center;
  }

  @media (min-width: ${laptopMin}) {
    background-image: url(${startPageBgLaptop});
  }

  @media (min-width: ${desktopMin}) {
    background-image: url(${startPageBgDesktop});
    padding: 20px;
  }
`;

export const StyledPromoTitle = styled.h1`
  text-align: center;
  margin: 0;
  font-weight: 300;
  color: ${colors.text.light};
  line-height: 90%;
  font-size: 48px;
  letter-spacing: -4%;

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
