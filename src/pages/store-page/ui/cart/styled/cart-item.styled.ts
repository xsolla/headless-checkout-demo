import styled from 'styled-components';
import { screenXsMax } from '../../../../../shared/media-break-points.const.ts';
export const StyledCartItemContainer = styled.div`
  display: flex;

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    width: 80px;
    height: 80px;
    margin-right: 13px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.05);

    img {
      width: 100%;
      height: auto;
    }
  }

  .details-wrapper {
    display: flex;
    flex-grow: 1;

    .details {
      flex-grow: 1;
    }

    .price-wrapper {
      flex-shrink: 0;
      margin-left: 8px;
    }

    .title {
      margin-bottom: 8px;
      font-family: Montserrat, sans-serif;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      text-align: left;
    }

    .price {
      font-family: Montserrat, sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      text-align: left;
    }
  }

  @media (max-width: ${screenXsMax}) {
    flex-shrink: 1;
    flex-grow: 1;

    .image-container {
      width: 60px;
      height: 60px;
    }

    .details-wrapper {
      flex-direction: column;

      .details {
        flex-grow: 0;
      }

      .title {
        margin-bottom: 4px;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
      }

      .price {
        font-size: 16px;
        line-height: 20px;
      }

      .price-wrapper {
        margin-left: 0;
      }
    }
  }
`;
