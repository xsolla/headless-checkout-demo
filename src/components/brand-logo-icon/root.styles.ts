import { colors } from '@shared/colors.const.ts';
import styled, { css } from 'styled-components';

export const BrandLogoIconContainer = styled.div<{ $isDefaultIcon: boolean }>`
  svg {
    border-radius: 8px;

    &,
    & > * {
      width: ${(props) => (props.$isDefaultIcon ? '18px' : '')};
      height: ${(props) => (props.$isDefaultIcon ? '18px' : '')};
      ${(props) =>
        props.$isDefaultIcon &&
        css`
          fill: ${colors.content.primary};
        `}
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${(props) => (props.$isDefaultIcon ? colors.overlay.mono : '')};
  border-radius: 8px;
`;
