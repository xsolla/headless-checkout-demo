import { useEffect } from 'react';
import { setSecureComponentStyles } from '../../../../sdk/styles/set-secure-component-styles.ts';
import styled from 'styled-components';

const useSecureStyles = styled.div`
  .icon {
    z-index: 1;
  }

  input,
  select {
    font-size: 16px;
  }

  input {
    position: relative;
    outline: none;
    background: rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 11px 12px;
    font-family: Arial;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: rgba(0, 0, 0, 1);

    &::placeholder {
      font-family: Arial;
      color: rgba(0, 0, 0, 0.6);
    }

    &:focus {
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(49, 202, 232, 1);
    }

    &.invalid {
      border: 1px solid rgba(220, 38, 38, 1);
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: rgba(0, 0, 0, 1);
      -webkit-box-shadow: 0 0 0 1000px rgba(255, 255, 255, 1) inset;
    }
  }
`;

export function useSecureComponentStyles() {
  useEffect(() => {
    const styles = useSecureStyles.componentStyle.rules[0] as string;
    void setSecureComponentStyles(styles);
  }, []);
}
