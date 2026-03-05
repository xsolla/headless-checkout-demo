import { colors } from '@shared/colors.const';
import { laptopMin } from '@shared/media-break-points.const';
import styled from 'styled-components';

export const StyledButtonLoader = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    display: block;
    height: 24px;
    width: 24px;
    border-radius: 100%;
    border: 2px solid ${colors.text.dark};
    border-bottom-color: transparent;
    box-sizing: border-box;
    animation: loader 1s linear infinite;

    @media (min-width: ${laptopMin}) {
      height: 26px;
      width: 26px;
    }
  }

  @keyframes loader {
    100% {
      transform: rotate(360deg);
    }
  }
`;
