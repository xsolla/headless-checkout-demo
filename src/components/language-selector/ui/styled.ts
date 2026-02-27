import styled from 'styled-components';
import { desktopMin, laptopMin } from '../../../shared/media-break-points.const';

export const StyledFlag = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 4px;

  .flag-icon {
    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: ${laptopMin}) {
    width: 20px;
    height: 20px;
  }

  @media (min-width: ${desktopMin}) {
    width: 22px;
    height: 22px;
  }
`;

export const StyledArrow = styled.img<{ $isOpen?: boolean }>`
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};

  @media (min-width: ${laptopMin}) {
    width: 18px;
    height: 18px;
  }

  @media (min-width: ${desktopMin}) {
    width: 22px;
    height: 22px;
  }
`;
