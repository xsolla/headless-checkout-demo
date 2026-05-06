import { colors } from '@shared/colors.const.ts';
import styled from 'styled-components';
import { aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledBuyButton = styled.button`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  padding: 0;
  margin: 0;
  background-color: ${colors.control.brand.secondary.bg};
  border: 1px solid ${colors.control.brand.secondary.border};
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-appearance: none;

  color: ${colors.control.brand.text.secondary};
  font-size: 16px;
  font-weight: 400;
  font-family: ${aktivGroteskFontFamily};
  line-height: inherit;
  white-space: normal;
  text-decoration: none;

  &:hover {
    background-color: ${colors.control.brand.secondary.bgHover};
  }

  &:active {
    background-color: ${colors.control.brand.secondary.bgHover};
  }

  &:focus-visible {
    outline: 2px solid ${colors.control.brand.secondary.borderHover};
    outline-offset: 2px;
  }

  &:disabled,
  &[disabled] {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
