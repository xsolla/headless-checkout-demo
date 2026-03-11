import styled from 'styled-components';
import { aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledRemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: auto;
  padding: 0 20px;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.12);
  border: 1px solid #c1c2bc;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-appearance: none;

  color: #000;
  font-size: 12px;
  font-weight: 400;
  font-family: ${aktivGroteskFontFamily};
  line-height: 14px;
  white-space: normal;

  &:hover {
    background-color: rgba(21, 28, 30, 0.12);
  }

  &:active {
    background-color: rgba(32, 42, 44, 0.12);
  }

  &:focus-visible {
    outline: 2px solid rgba(0, 0, 0, 0.4);
    outline-offset: 2px;
  }

  &:disabled,
  &[disabled] {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
