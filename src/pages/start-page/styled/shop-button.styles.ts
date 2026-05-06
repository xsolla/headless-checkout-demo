import styled from 'styled-components';
import { desktopMin, laptopMin } from '@shared/media-break-points.const.ts';
import { aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledShopButton = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 15px;
  background: #80eaff;
  border: 1px solid #31cae8;
  border-radius: 4px;
  font-family: ${aktivGroteskFontFamily};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1%;
  line-height: 100%;
  text-align: center;
  color: #000;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #55dcf6;
    border-color: #22a8c3;
  }

  &:active {
    background: #31cae8;
    border-color: #31cae8;
  }

  @media (min-width: ${laptopMin}) {
    height: 44px;
    padding: 0 16px;
    border-radius: 6px;
    font-size: 16px;
  }

  @media (min-width: ${desktopMin}) {
    height: 54px;
    padding: 0 20px;
    border-radius: 8px;
    font-size: 20px;
  }
`;

export const StyleButtonText = styled.span<{ $isLoading: boolean }>`
  opacity: ${(props) => (props.$isLoading ? '0' : '1')};
`;
