import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';
import { tabletMin } from '@shared/media-break-points.const.ts';
import { aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledCartItemContainer = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-grow: 1;

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    width: 64px;
    height: 64px;
    margin-right: 13px;
    border-radius: 4px;
    background: #f3f3f2;

    img {
      width: 100%;
      height: auto;
    }
  }

  .details-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .details {
      flex-grow: 0;
    }

    .price-wrapper {
      flex-shrink: 0;
      margin-left: 0;
    }

    .title {
      margin-bottom: 4px;
      font-family: ${aktivGroteskFontFamily};
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
      color: ${colors.text.dark};
    }

    .price {
      font-family: ${aktivGroteskFontFamily};
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
      color: ${colors.text.dark};
    }
  }

  @media (min-width: ${tabletMin}) {
    flex-shrink: 0;
    flex-grow: 0;

    .image-container {
      width: 80px;
      height: 80px;
    }

    .details-wrapper {
      flex-direction: row;

      .details {
        flex-grow: 1;
      }

      .title {
        margin-bottom: 8px;
        font-size: 18px;
        line-height: 24px;
      }

      .price {
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
`;
