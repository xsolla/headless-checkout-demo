import styled from 'styled-components';
import { screenXsMax } from '../../../shared/media-break-points.const.ts';

const cyan = 'rgba(0, 122, 153, 1)';

export const StyledRightColumn = styled.div`
  position: relative;
  border-radius: 25px;
  display: flex;
  height: 549px;

  .overlay {
    position: absolute;
    display: flex;
    box-shadow: ${cyan} -20px 0px 100px 100px;
    opacity: 0.08;
    right: 0;
    height: 100%;
    background: ${cyan};
    top: 0;
  }

  .overlay-1 {
    position: absolute;
    border-radius: 250px;
    display: flex;
    height: 549px;
    width: 630px;
    box-shadow: ${cyan} 10px 0px 1000px 110px;
    opacity: 0.25;
    right: 0;
    background: ${cyan};
  }

  .overlay-2 {
    position: absolute;
    display: flex;
    height: 110vh;
    width: 110%;
    box-shadow: ${cyan} 10px 0px 80px 140px;
    opacity: 0.15;
    right: 0;
    top: -114px;
    background: ${cyan};
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
  }

  .headless-img {
    position: relative;
    z-index: 1;

    & img {
      width: auto;
      height: 549px;
    }
  }

  @media (max-width: ${screenXsMax}) {
    display: none;
  }
`;
