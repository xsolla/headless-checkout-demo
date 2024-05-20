import { useEffect } from 'react';
import { setSecureComponentStyles } from '../../../../sdk/styles/set-secure-component-styles.ts';
import styled from 'styled-components';

const useSecureStyles = styled.div`
  .icon {
    z-index: 1;
  }

  input {
    position: relative;
    outline: none;
    background: rgba(255, 255, 255, 0.07);
    border: none;
    border-radius: 8px;
    padding: 12px 10px;
    color: rgba(255, 255, 255, 1);

    &::placeholder {
      font-family: Montserrat, sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.55);
    }

    &:focus {
      background: rgba(23, 19, 32, 1);
      border: 1px solid rgba(255, 233, 204, 1);
    }

    &.invalid {
      border: 1px solid rgba(255, 102, 138, 1);
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: rgba(255, 255, 255, 1);
      -webkit-box-shadow: 0 0 0 1000px rgba(23, 19, 32, 1) inset;
    }
  }
`;

export function useSecureComponentStyles() {
  useEffect(() => {
    const styles = useSecureStyles.componentStyle.rules[0] as string;
    void setSecureComponentStyles(styles);
  }, []);
}
