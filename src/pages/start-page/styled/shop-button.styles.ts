import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';
import { desktopMin, laptopMin } from '../../../shared/media-break-points.const.ts';

export const StyledShopButton = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 15px;
  background: ${colors.control.primary.bg};
  border: 1px solid ${colors.control.primary.border};
  border-radius: 4px;
  font-family: AktivGrotesk, sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1%;
  line-height: 100%;
  text-align: center;
  color: ${colors.text.dark};
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${colors.control.primary.hover.bg};
    border-color: ${colors.control.primary.hover.border};
  }

  &:active {
    background: ${colors.control.primary.border};
    border-color: ${colors.control.primary.border};
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

export const StyleButtonText = styled.span<{ isLoading: boolean }>`
  opacity: ${(props) => (props.isLoading ? '0' : '1')};
`;
