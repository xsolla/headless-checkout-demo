import styled from 'styled-components';
import { screenXsMax } from '../../../shared/media-break-points.const.ts';

export const StyledLeftColumn = styled.div`
  flex-shrink: 0;
  margin-right: 187px;
  padding-top: 66px;
  width: 435px;

  .label {
    padding: 0;
    margin: 0 0 29px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    font-family: monospace;
  }

  .title {
    display: flex;
    position: relative;
    padding: 0;
    margin: 0 0 19px;
    font-family: SharpgroteskSmb, sans-serif;
    font-size: 86px;
    font-weight: 600;
    line-height: 85px;
    text-align: left;
    text-transform: uppercase;

    & .title-text {
      letter-spacing: 3.5px;
    }

    & .title-image {
      position: absolute;
      top: -5px;
      right: 0;
    }
  }

  .capture {
    padding: 0;
    margin: 0 0 34px;
    font-family: Sharpgrotesk, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 23.2px;
    text-align: left;

    .breaker {
      display: none;
    }
  }

  .language-selector-wrapper {
    margin-bottom: 12px;

    .language-label {
      display: inline-block;
      margin-bottom: 4px;
      font-family: Sharpgrotesk, sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      text-align: left;
      color: rgba(255, 255, 255, 0.7);
    }
  }

  @media (max-width: ${screenXsMax}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 80px - 32px);
    padding-top: 0;
    padding-bottom: 32px;

    @media (orientation: landscape) {
      min-height: 100vh;
    }

    .label {
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 15px;
    }

    .title {
      margin: 0 0 15px;
      font-size: 36px;
      line-height: 36px;

      .title-text {
        width: 150px;
        letter-spacing: 0.8px;
      }

      .title-image {
        top: -3px;
        left: 161px;
        width: 28px;
        height: 28px;

        & img {
          width: 100%;
          height: auto;
        }
      }
    }

    .capture {
      flex-grow: 1;
      font-size: 14px;
      line-height: 20px;

      .breaker {
        display: inline;
      }
    }
  }
`;
