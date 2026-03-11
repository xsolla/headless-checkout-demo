import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';
import { aktivGroteskFontFamily, pilatFontFamily } from '@shared/fonts/fonts.const.ts';

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
      background: rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      color: rgba(0, 0, 0, 0.6);
      font-family: ${pilatFontFamily};
      font-size: 14px;
      line-height: 20px;
      margin: 0;
    }

    & a {
      color: rgba(0, 0, 0, 0.6);
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
      ${colors.bg.secondary} 0%,
      rgba(0, 0, 0, 0.05) 12%,
      ${colors.bg.secondary} 24%
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
    font-family: ${aktivGroteskFontFamily};
    color: ${colors.control.primary.text};
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    background: ${colors.control.primary.bg};
    padding: 14px;
    border-radius: 8px;
    border: 1px solid ${colors.control.primary.border};

    &:hover {
      background: ${colors.control.primary.hover.bg};
      border-color: ${colors.control.primary.hover.border};
    }

    &:active {
      background: ${colors.control.primary.hover.border};
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
        border: 2px solid ${colors.control.primary.text};
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
      font-family: ${aktivGroteskFontFamily};
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      color: ${colors.text.dark};
    }

    p {
      margin: 0;
      padding: 0;
      text-align: center;
      font-family: ${aktivGroteskFontFamily};
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      color: rgba(0, 0, 0, 0.6);
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
  font-family: ${aktivGroteskFontFamily};

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
    color: ${colors.text.dark};
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
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 4px;
    }

    .description {
      display: none;
    }
  }
`;
