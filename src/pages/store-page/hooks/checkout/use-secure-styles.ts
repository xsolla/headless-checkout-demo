import { useEffect } from 'react';
import { setSecureComponentStyles } from '../../../../sdk/styles/set-secure-component-styles.ts';
import styled from 'styled-components';
import { aktivGroteskFontFamily } from '@shared/fonts/fonts.const.ts';

const useSecureStyles = styled.div`
  .icon {
    z-index: 1;
  }

  input,
  select {
    font-size: 16px;
  }

  @media (min-width: 740px) {
    font-size: 14px;
  }

  input {
    position: relative;
    outline: none;
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 12px 10px;
    color: rgba(0, 0, 0, 1);

    &::placeholder {
      font-family: ${aktivGroteskFontFamily};
      font-weight: 400;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.45);
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
