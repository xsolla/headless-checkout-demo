import styled from 'styled-components';
import { screenXsMax } from '../../../shared/media-break-points.const.ts';

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
  font-family: Bagnard sans-serif;
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
  font-family: Bagnard sans-serif;
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
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;

  @media (max-width: ${screenXsMax}) {
    display: block;
  }
`;
