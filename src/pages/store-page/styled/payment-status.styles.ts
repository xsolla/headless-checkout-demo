import styled from 'styled-components';
import { screenXsMax } from '../../../shared/media-break-points.const.ts';
import { graphikFontFamily } from '../../../shared/styled/graphik-font-family.const.ts';
import { loaderStyles } from '../../../shared/styled/loader.styles.const.ts';

export const StyledPaymentStatus = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 280px;
  margin-bottom: 38px;
  padding: 26px;
  border-radius: 16px;
  background: rgba(16, 15, 22, 0.6);
  box-shadow: 0 1.92px 7.69px 0 rgba(0, 0, 0, 0.18);

  .status-image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 23px 0 10px;
    height: 100px;
    width: 180px;

    & img {
      height: 100%;
      width: auto;
    }
  }

  psdk-status {
    .title-text {
      margin: 0 0 8px;
      padding: 0;
      text-align: center;
      font-family: ${graphikFontFamily};
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      color: rgba(255, 255, 255, 1);
    }

    .description {
      margin: 0;
      padding: 0;
      text-align: center;
      font-family: ${graphikFontFamily};
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      color: rgba(255, 255, 255, 0.7);
    }

    .message {
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 12px;
      border-radius: 12px;
      background: rgba(65, 57, 96, 1);
      font-family: ${graphikFontFamily};
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
      color: rgba(191, 192, 217, 1);
    }

    ${loaderStyles}
    .loader {
      &::before {
        width: 40px;
        height: 40px;
        border: 5px solid rgba(105, 57, 249, 1);
        border-bottom-color: transparent;
      }
    }
  }

  @media (max-width: ${screenXsMax}) {
    flex-direction: row;
    justify-content: center;

    .status-image {
      display: none;
    }
  }
`;
