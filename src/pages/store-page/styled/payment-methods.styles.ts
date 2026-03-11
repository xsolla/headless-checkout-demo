import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';
import { aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledPaymentMethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  margin-bottom: 20px;
`;

export const StyledPaymentMethodContainer = styled.div<{ $isFetching: boolean }>`
  width: 100%;
  border-radius: 16px;
  padding: 16px;
  background: ${colors.bg.secondary};

  .payment-method {
    display: flex;
    align-items: center;
    cursor: pointer;

    .name {
      font-family: ${aktivGroteskFontFamily};
      font-weight: 400;
      font-size: 12px;
      margin-left: 12px;
      color: ${colors.text.dark};
    }

    .expand-button {
      margin-left: auto;

      pointer-events: ${(props) => (props.$isFetching ? 'none' : 'auto')};
    }
  }
`;

export const StyledMoreMethodsButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  border-radius: 16px;
  padding: 12px 16px;
  background: ${colors.bg.secondary};

  button {
    font-family: ${aktivGroteskFontFamily};
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.5px;
    width: 100%;
    height: 100%;
    color: ${colors.control.primary.border};
    border: none;
    background: none;
    cursor: pointer;
  }
`;
