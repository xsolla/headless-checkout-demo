import { colors } from '@shared/colors.const';
import styled from 'styled-components';
import { aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledUserButton = styled.button`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: auto;
  padding: 0;
  margin: 0;
  background-color: ${colors.background.secondary};
  border: 1px solid ${colors.content.brandSecondary};
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  opacity: 1;
  overflow: visible;

  &:hover {
    background-color: ${colors.background.primary};
  }

  &:active {
    background-color: ${colors.background.primary};
  }

  &:focus-visible {
    outline: 2px solid ${colors.content.brandSecondary};
    outline-offset: 2px;
  }

  .button__inner {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: 4px;
    height: 100%;
    width: auto;
    padding: 0 20px;
    margin: 0;
    background-color: transparent;
    border: none;
    border-radius: 0;
    overflow: visible;
    cursor: inherit;
  }

  .button__label {
    color: ${colors.content.brandPrimary};
    font-size: 16px;
    font-weight: 400;
    font-family: ${aktivGroteskFontFamily};
    line-height: inherit;
    white-space: nowrap;
    text-decoration: none;
  }

  .button__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`;
