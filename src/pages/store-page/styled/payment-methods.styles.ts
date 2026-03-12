import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';
import { aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';
import { tabletMin } from '@shared/media-break-points.const';

export const StyledPaymentMethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  margin-bottom: 20px;
`;

export const StyledPaymentMethodContainer = styled.div<{ $isFetching: boolean }>`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background: ${colors.bg.primary};

  .payment-method {
    display: flex;
    align-items: center;
    cursor: pointer;

    .name {
      font-family: ${aktivGroteskFontFamily};
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      margin-left: 16px;
      color: ${colors.text.dark};
    }

    .expand-button {
      margin-left: auto;

      pointer-events: ${(props) => (props.$isFetching ? 'none' : 'auto')};
    }

    @media (min-width: ${tabletMin}) {
      .name {
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
`;

export const StyledMoreMethodsButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  border-radius: 8px;
  padding: 16px;
  background: ${colors.bg.primary};

  button {
    font-family: ${aktivGroteskFontFamily};
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.5px;
    width: 100%;
    height: 100%;
    color: ${colors.control.primary.text};
    border: none;
    background: none;
    cursor: pointer;

    @media (min-width: ${tabletMin}) {
      height: 56px;
      font-size: 18px;
      line-height: 24px;
    }
  }
`;
