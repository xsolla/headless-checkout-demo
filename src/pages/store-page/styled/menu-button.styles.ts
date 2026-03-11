import styled from 'styled-components';

export const StyledMenuButton = styled.button`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 40px;
  padding: 0;
  margin: 0;
  background-color: #f3f3f2;
  border: 1px solid #31cae8;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-appearance: none;

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
`;
