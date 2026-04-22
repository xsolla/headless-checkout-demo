import { createGlobalStyle } from 'styled-components';
import { colors } from '@shared/colors.const.ts';
import { montserratFontFamily, aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';

export const SDKControlsGlobalStyles = createGlobalStyle`
  psdk-text,
  psdk-checkbox,
  psdk-phone,
  psdk-card-number,
  psdk-google-pay-button,
  psdk-apple-pay {
    font-family: ${montserratFontFamily};
    width: 100%;

    .label {
      display: none;
    }

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }

    .wrapper {
      height: 48px;
    }

    .field-error {
      color: ${colors.content.alertPrimary};
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      margin-top: 4px;
    }
  }

  psdk-select {
    font-family: ${aktivGroteskFontFamily};

    .select {
      background: rgba(0, 0, 0, 0.08);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      padding: 11px 12px;
      color: #000;
      box-sizing: border-box;
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      cursor: pointer;

      &:hover {
        background: ${colors.overlay.brand};
        border: 1px solid ${colors.background.brandPrimary};
      }

      &:focus {
        background: ${colors.background.staticLight};
        border: 1px solid ${colors.border.brand};
      }

      &.invalid {
        border: 1px solid ${colors.border.alert};
      }

      #dropdown-icon {
        svg {
          path {
            fill: #000;
          }
        }
      }

      #select-content {
        font-family: ${aktivGroteskFontFamily};
      }
    }

    .arrow {
      display: flex;

      &.arrow-up {
        transform: rotate(180deg);
      }
    }

    .select-options {
      width: 100%;
      height: 100%;
      max-height: 200px;
    }

    .dropdown {
      position: absolute;
      z-index: 1;
      display: none;
      flex-direction: column;
      align-items: center;
      overflow-x: hidden;
      overflow-y: auto;
      width: 100%;
      height: 216px;
      padding: 8px 0;
      border-radius: 4px;
      background: #fff;
      border: 1px solid #e5e7eb;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
      margin-top: 4px;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-thumb {
        border: 1px solid transparent;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.1);
      }

      ::-webkit-scrollbar-track {
        border: 4px solid transparent;
        border-radius: 1px;
      }
    }

    .dropdown-wrapper {
      position: relative;

      &.dropdown-opened {
        .dropdown {
          display: flex;
        }
      }
    }

    .option {
      display: flex;
      font-size: 14px;
      color: #000;

      &:hover,
      &.active {
        background: rgba(221, 223, 216, 0.15);
      }

      &.focused {
        background: ${colors.overlay.brand};
      }

      .option-content {
        width: 100%;
        height: 100%;
        padding: 11px 12px;
        cursor: pointer;
      }
    }
  }

  psdk-google-pay-button {
    display: block;
    height: 48px;
  }

  psdk-qr-code {
    display: flex;
    min-height: 170px;

    iframe {
      border: none;
    }
  }

  psdk-apple-pay {
    .apple-pay-error {
      font-family: ${montserratFontFamily};
      margin: 0;
      padding: 12px;
      font-size: 14px;
      line-height: 20px;
      border-radius: 12px;
      color: rgba(255, 153, 172, 1);
      background: rgba(255, 51, 109, 0.35);

      a,
      a:hover,
      a:visited {
        color: rgba(153, 0, 66, 1);
      }
    }
  }

  psdk-checkbox {
    display: flex;
    font-size: 14px;

    .checkbox {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .checkbox-dummy {
      display: none;
    }

    .wrapper {
      flex-grow: 1;
      display: flex;
      align-items: center;
    }

    .label {
      display: block;
    }

    input {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
`;
