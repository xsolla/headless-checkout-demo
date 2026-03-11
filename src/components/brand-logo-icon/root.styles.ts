import styled from 'styled-components';

export const BrandLogoIconContainer = styled.div<{ $isDefaultIcon: boolean }>`
  svg {
    border-radius: 8px;

    &,
    & > * {
      width: ${(props) => (props.$isDefaultIcon ? '18px' : '')};
      height: ${(props) => (props.$isDefaultIcon ? '18px' : '')};
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${(props) => (props.$isDefaultIcon ? 'rgba(0, 0, 0, 0.05)' : '')};
  border-radius: 8px;
`;
