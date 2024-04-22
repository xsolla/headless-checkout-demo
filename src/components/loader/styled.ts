import styled from 'styled-components';
export const StyledLoader = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    display: block;
    height: 25px;
    width: 25px;
    border-radius: 100%;
    border: 2px solid #fff;
    border-bottom-color: transparent;

    animation: loader 1s linear infinite;
  }

  @keyframes loader {
    100% {
      transform: rotate(360deg);
    }
  }
`;
