import styled from 'styled-components';
import { aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledBalance = styled.button`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: auto;
  padding: 0;
  margin: 0;
  background-color: #f3f3f2;
  border: 1px solid #31cae8;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  flex-shrink: 0;

  &:hover {
    background-color: rgba(34, 168, 195, 0.04);
  }

  &:active {
    background-color: rgba(34, 168, 195, 0.08);
  }

  &:focus-visible {
    outline: 2px solid rgba(34, 168, 195, 0.6);
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
    color: rgb(34, 168, 195);
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
    width: 30px;
    height: 30px;
    flex-shrink: 0;

    img {
      width: 100%;
      height: auto;
    }
  }
`;
