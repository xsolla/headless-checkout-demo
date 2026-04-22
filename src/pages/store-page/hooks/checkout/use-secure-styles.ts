import { colors } from '@shared/colors.const.ts';
import { useEffect } from 'react';
import { setSecureComponentStyles } from '../../../../sdk/styles/set-secure-component-styles.ts';
import styled from 'styled-components';

const SecureStylesComponent = styled.div`
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
    background: rgb(46, 62, 65);
    border: 1px solid rgb(59, 80, 85);
    border-radius: 8px;
    padding: 11px 12px;
    font-family: Arial;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: ${colors.content.primary};

    &::placeholder {
      font-family: Arial;
      color: ${colors.content.tertiary};
    }

    &:focus {
      background: rgb(46, 62, 65);
      border: 1px solid ${colors.border.brand};
    }

    &.invalid {
      border: 2px solid ${colors.border.alert} !important;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: ${colors.content.primary};
      -webkit-box-shadow: 0 0 0 1000px rgb(46, 62, 65) inset;
    }
  }
`;

export function useSecureComponentStyles() {
  useEffect(() => {
    const rules = SecureStylesComponent.componentStyle.rules;
    const styles = rules.flat().join('');
    void setSecureComponentStyles(styles);
  }, []);
}
