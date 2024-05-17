export const loaderStyles = `
    .loader {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      &::before {
        content: '';
        display: block;
        width: 25px;
        height: 25px;
        border: 2px solid rgba(255, 255, 255, 1);
        border-bottom-color: transparent;
        border-radius: 100%;
        animation: loader 1s linear infinite;
      }

      @keyframes loader {
        100% {
          transform: rotate(360deg);
        }
      }
    }
`;
