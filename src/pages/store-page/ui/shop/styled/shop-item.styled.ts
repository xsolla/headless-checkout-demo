import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';
import { aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';
import { tabletMin } from '@shared/media-break-points.const';

export const StyledShopItemContainer = styled.div`
  display: block;
  height: 100%;
  border-radius: 8px;
  background: ${colors.bg.primary};
  overflow: hidden;

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    height: 150px;
    width: 100%;
    background: rgba(128, 234, 255, 0.3);
    border-radius: 8px;

    img {
      width: auto;
      height: 100%;

      &.image-giant-coin-pack {
        height: 80%;
      }
    }
  }

  .details-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    padding: 16px;

    .title {
      font-family: ${aktivGroteskFontFamily};
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
      color: ${colors.text.dark};
    }

    .price {
      font-family: ${aktivGroteskFontFamily};
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      text-align: left;
      color: ${colors.text.dark};
    }

    @media (min-width: ${tabletMin}) {
      .title {
        margin-right: 24px;
      }
    }
  }
`;
