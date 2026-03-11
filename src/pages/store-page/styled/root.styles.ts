import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';
import { tabletMin } from '@shared/media-break-points.const.ts';
import { pilatFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledRootDiv = styled.div`
  position: relative;
  background-color: ${colors.bg.primary};
  width: 100%;
  height: 100vh;
`;

export const StyledContentContainer = styled.div`
  position: relative;
  z-index: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  color: ${colors.text.dark};
  padding: 20px 16px 0 16px;
  padding-bottom: 40px;
  background: #f3f3f2;
  background-image: url(/images/store-page-bg.png);
  background-repeat: no-repeat;
  background-size: initial;
  background-position: -140px top;

  @media (min-width: ${tabletMin}) {
    padding: 0;
    padding-bottom: 40px;
    background-position: top right;
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 0;

  @media (min-width: ${tabletMin}) {
    padding-top: 62px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const StyledMainContent = styled.main`
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 1148px;
`;

export const StoreTitle = styled.h1`
  margin: 0 0 37px;
  font-family: ${pilatFontFamily};
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  text-align: left;
  color: ${colors.text.dark};

  @media (min-width: ${tabletMin}) {
    margin-bottom: 47px;
    font-size: 48px;
    line-height: 58px;

    &.without-shop {
      margin-bottom: 80px;
    }
  }
`;

export const StyledSectionTitle = styled.h2`
  margin: 0 0 16px;
  font-family: ${pilatFontFamily};
  font-size: 28px;
  font-weight: 600;
  line-height: 34px;
  text-align: left;
  color: ${colors.text.dark};

  @media (min-width: ${tabletMin}) {
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 38px;
  }
`;

export const StyledColumns = styled.div`
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 1148px;

  .payment-details-column {
    margin-bottom: 20px;
  }

  @media (min-width: ${tabletMin}) {
    display: flex;
    justify-content: space-between;

    .payment-details-column {
      margin-bottom: 0;
    }

    &.with-shop {
      .cart-column {
        max-width: 600px;
        width: 52.3%;
        margin-right: 48px;
      }

      .payment-details-column {
        max-width: 500px;
        width: 44%;
      }
    }

    &.without-shop {
      .cart-column {
        width: 50%;
        margin-right: 48px;
      }

      .payment-details-column {
        width: 50%;
      }
    }
  }
`;
