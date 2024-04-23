import styled from 'styled-components';
import storeBgMobile from '../../../assets/store-bg-mobile.png';
import { screenXsMax } from '../../../shared/media-break-points.const.ts';
import storeBg from '../../../assets/store-bg.png';

export const StyledOverlayDiv = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 570px);
  width: 1620px;
  height: 100vh;
  background-image: url('${storeBgMobile}');
  background-repeat: no-repeat;
  box-shadow:
    inset 0 -10px 25px 60px #190e39,
    0 0px 10px 30px #190e39;

  @media (min-width: ${screenXsMax}) {
    left: calc(50% - 810px);
    background-image: url('${storeBg}');
    width: 1620px;
    background-position: 25px -124px;
  }
`;

export const StyledMobileSecondOverlayDiv = styled.div`
  display: none;

  @media (max-width: ${screenXsMax}) {
    position: fixed;
    top: 119px;
    display: block;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to top, rgba(44, 38, 64, 1), rgba(44, 38, 64, 0));
  }
`;
