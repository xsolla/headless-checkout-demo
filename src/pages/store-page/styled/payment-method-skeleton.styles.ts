import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';

export const StyledPaymentMethodSkeleton = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  border-radius: 16px;
  background: linear-gradient(
    90deg,
    ${colors.bg.secondary} 0%,
    rgba(0, 0, 0, 0.05) 12%,
    ${colors.bg.secondary} 24%
  );
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
