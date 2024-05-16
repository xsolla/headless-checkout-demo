import styled from 'styled-components';

export const StyledBackButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;

  svg {
    &,
    & > * {
      width: 18px;
      height: 18px;
    }

    path {
      fill: rgba(255, 255, 255, 1);
    }
  }
`;
