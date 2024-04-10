import styled from 'styled-components';

export const StyledShopButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 20px 0 20px;
  background: rgba(255, 0, 85, 1);
  font-family: Sharpgrotesk, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #80002d;
    box-shadow: none;
  }

  &:active {
    color: #000;
  }
`;
