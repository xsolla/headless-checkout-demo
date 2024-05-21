import styled from 'styled-components';
import { graphikFontFamily } from '../../../shared/styled/graphik-font-family.const.ts';
import { montserratFontFamily } from '../../../shared/styled/montserrat-font-family.const.ts';

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
  background: rgba(16, 15, 22, 0.6);

  .payment-method {
    display: flex;
    align-items: center;
    cursor: pointer;

    .name {
      font-family: ${graphikFontFamily};
      font-weight: 400;
      font-size: 12px;
      margin-left: 12px;
      color: rgba(255, 255, 255, 1);
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
  background: rgba(16, 15, 22, 0.6);

  button {
    font-family: ${montserratFontFamily};
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.5px;
    width: 100%;
    height: 100%;
    color: rgba(135, 107, 250, 1);
    border: none;
    background: none;
    cursor: pointer;
  }
`;
