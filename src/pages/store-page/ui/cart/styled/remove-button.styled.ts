import { colors } from '@shared/colors.const.ts';
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
  background-color: ${colors.control.mono.secondary.bg};
  border: 1px solid ${colors.control.mono.secondary.border};
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-appearance: none;

  color: ${colors.control.mono.text.secondary};
  font-size: 12px;
  font-weight: 400;
  font-family: ${aktivGroteskFontFamily};
  line-height: 14px;
  white-space: normal;

  &:hover {
    background-color: ${colors.control.mono.secondary.bgHover};
  }

  &:active {
    background-color: ${colors.control.mono.secondary.bgHover};
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
