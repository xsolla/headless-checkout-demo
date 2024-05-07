import styled from 'styled-components';
import { screenXsMax } from '../../../shared/media-break-points.const.ts';
import { graphikFontFamily } from '../../../shared/styled/graphik-font-family.const.ts';
import { montserratFontFamily } from '../../../shared/styled/montserrat-font-family.const.ts';
import { bagnardFontFamily } from '../../../shared/styled/bagnard-font-family.const.ts';

export const StyledRootDiv = styled.div`
  position: relative;
  background-color: #190e39;
  width: 100%;
  height: 100vh;
`;

export const StyledContentContainer = styled.div`
  position: relative;
  z-index: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  color: white;

  @media (max-width: ${screenXsMax}) {
    padding: 20px 16px 0 16px;
  }
`;

export const StyledPaymentMethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  margin-bottom: 20px;
`;

export const StyledPaymentMethodContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 72px;
  border-radius: 16px;
  padding: 16px;
  background: rgba(16, 15, 22, 0.6);

  .name {
    font-family: ${graphikFontFamily};
    font-weight: 400;
    font-size: 12px;
    margin-left: 12px;
    color: rgba(255, 255, 255, 1);
  }

  .expand-button {
    background: none;
    border: none;
    margin-left: auto;
    cursor: pointer;

    svg {
      transition: all 0.3s ease;

      path {
        fill: rgba(255, 255, 255, 0.5);
      }
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

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 62px;
  padding-left: 32px;
  padding-right: 32px;

  @media (max-width: ${screenXsMax}) {
    padding: 32px 0 0;
  }
`;

export const StoreTitle = styled.h1`
  padding: 0 0 0 30px;
  margin: 0 0 20px;
  font-family: ${bagnardFontFamily};
  font-size: 96px;
  font-weight: 400;
  line-height: 96px;
  text-align: center;
  color: rgba(231, 230, 254, 1);

  @media (max-width: ${screenXsMax}) {
    margin-bottom: 32px;
    padding: 0;
    font-size: 60px;
    font-weight: 400;
    line-height: 60px;
    text-align: center;
  }
`;

export const StyledSectionTitle = styled.h2`
  padding: 0;
  margin: 0 0 20px;
  font-family: ${bagnardFontFamily};
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;
  color: rgba(231, 230, 254, 1);

  @media (max-width: ${screenXsMax}) {
    margin: 0 0 16px;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
  }
`;

export const StyledColumns = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 1148px;

  @media (max-width: ${screenXsMax}) {
    display: block;
  }
`;
