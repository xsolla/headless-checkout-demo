import styled from 'styled-components';
import { graphikFontFamily } from '../../../../shared/styled/graphik-font-family.const.ts';
import { montserratFontFamily } from '../../../../shared/styled/montserrat-font-family.const.ts';

export const StyledCheckoutContainer = styled.div<{ $isLoading: boolean; $isSecondStep: boolean }>`
  margin-top: ${(props) => (props.$isSecondStep ? '0' : '16px')};

  .back-button {
    margin-bottom: 28px;
  }

  .submit-button {
    display: ${(props) => (props.$isLoading ? 'none' : 'block')};
    margin-top: 16px;
  }

  .form-messages {
    display: ${(props) => (props.$isLoading ? 'none' : 'block')};

    .form-message {
      padding: 12px;
      background: rgba(65, 57, 96, 1);
      border-radius: 12px;
      color: rgba(191, 192, 217, 1);
      font-family: ${montserratFontFamily};
      font-size: 14px;
      line-height: 20px;
      margin: 0;
    }

    & a {
      color: rgba(191, 192, 217, 1);
    }
  }

  .form {
    display: ${(props) => (props.$isLoading ? 'none' : 'flex')};
    flex-direction: column;
    margin: ${(props) => (props.$isSecondStep ? '0 0 16px' : '16px 0')};

    .form-error {
      margin-top: 16px;
    }

    psdk-qr-code {
      margin: 0 auto;
    }
  }
`;

export const StyledDefaultFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const StyledFormSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  .form-skeleton {
    display: flex;
    column-gap: 12px;
  }

  .skeleton {
    display: flex;
    width: 100%;
    border-radius: 8px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.07) 0%,
      rgba(16, 15, 22, 0.6) 12%,
      rgba(255, 255, 255, 0.07) 24%
    );
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;

    @keyframes shine {
      to {
        background-position-x: -200%;
      }
    }
  }

  .control {
    height: 40px;
  }

  .button {
    height: 48px;
  }
`;

export const StyledSubmitButtonContainer = styled.div`
  psdk-default-submit-button button {
    cursor: pointer;
    width: 100%;
    height: 48px;
    font-family: ${graphikFontFamily};
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    background: linear-gradient(270deg, #7f38cf 0%, #7a41ce 49.35%, #4a4fb5 100%);
    padding: 14px;
    border-radius: 8px;
    border: 1px solid rgba(238, 238, 238, 0.28);

    &:hover {
      background: linear-gradient(270deg, #7800ff 0%, #6d0dfa 49.35%, #1620e7 100%);
    }

    &:active {
      background: linear-gradient(270deg, #1620e7 0%, #6d0dfa 49.35%, #7800ff 100%);
    }

    .loader {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      &::before {
        content: '';
        display: block;
        width: 25px;
        height: 25px;
        border: 2px solid rgba(255, 255, 255, 1);
        border-bottom-color: transparent;
        border-radius: 100%;
        animation: loader 1s linear infinite;
      }

      @keyframes loader {
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }

  .psdk-apple-pay {
    height: 50px;
  }

  .apple-pay-waiting-processing {
    margin-bottom: 16px;
    h4 {
      margin: 0 0 8px;
      padding: 0;
      text-align: center;
      font-family: ${graphikFontFamily};
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      color: rgba(255, 255, 255, 1);
    }

    p {
      margin: 0;
      padding: 0;
      text-align: center;
      font-family: ${graphikFontFamily};
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const StyledCreditCardShortFormContainer = styled.div`
  psdk-card-number {
    display: block;
    margin-bottom: 12px;

    .wrapper {
      position: relative;
    }

    .card-icon {
      position: absolute;
      top: 12px;
      right: 12px;
    }
  }

  .card-data-wrapper {
    display: flex;
    margin-bottom: 12px;
  }

  .expire-wrapper {
    display: flex;
    flex: 1;
    column-gap: 7px;
  }

  #cvv {
    flex: 1;
    margin-left: 9px;

    .description {
      display: none;
    }
  }
`;

export const StyledCreditCardLongFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${montserratFontFamily};

  .billing-information,
  .address {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }

  .address {
    margin-top: 24px;
  }

  .row {
    display: flex;
    column-gap: 12px;

    &:empty {
      display: none;
    }
  }

  h4 {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: rgba(255, 255, 255, 1);
    margin: 0;
  }

  psdk-text,
  psdk-phone,
  psdk-select {
    .label,
    label {
      display: block;
      font-size: 12px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 4px;
    }

    .description {
      display: none;
    }
  }
`;
