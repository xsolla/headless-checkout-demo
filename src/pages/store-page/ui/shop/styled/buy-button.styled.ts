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
  background-color: #ccf6ff;
  border: 1px solid #80eaff;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-appearance: none;

  color: #000;
  font-size: 16px;
  font-weight: 400;
  font-family: ${aktivGroteskFontFamily};
  line-height: inherit;
  white-space: normal;
  text-decoration: none;

  &:hover {
    background-color: #e5fbff;
  }

  &:active {
    background-color: #b2f2ff;
  }

  &:focus-visible {
    outline: 2px solid #80eaff;
    outline-offset: 2px;
  }

  &:disabled,
  &[disabled] {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
