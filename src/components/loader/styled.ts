import styled from 'styled-components';
import { LoaderProps } from './loader-props.interface.ts';
export const StyledLoader = styled.div<LoaderProps>`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    display: block;
    height: ${(props) => (props.height ? props.height : '25px')};
    width: ${(props) => (props.width ? props.width : '25px')};
    border-radius: 100%;
    border: ${(props) => (props.borderwidth ? props.borderwidth : '2px')} solid
      ${(props) => (props.color ? props.color : '#fff')};
    border-bottom-color: transparent;

    animation: loader 1s linear infinite;
  }

  @keyframes loader {
    100% {
      transform: rotate(360deg);
    }
  }
`;
