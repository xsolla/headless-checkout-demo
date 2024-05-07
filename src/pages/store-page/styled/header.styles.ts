import styled from 'styled-components';
import { screenXsMax } from '../../../shared/media-break-points.const.ts';

export const StyledDesktopHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 23px 48px 23px 60px;
  background: rgba(0, 0, 0, 0.8);

  @media (max-width: ${screenXsMax}) {
    display: none;
  }
`;

export const StyledMobileHeader = styled.header`
  display: none;

  @media (max-width: ${screenXsMax}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4px;
  }
`;
