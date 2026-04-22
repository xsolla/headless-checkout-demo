import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';

export const StyledPaymentMethodSkeleton = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  border-radius: 16px;
  background: linear-gradient(
    90deg,
    ${colors.background.primary} 0%,
    ${colors.content.secondary} 16%,
    ${colors.background.primary} 32%
  );
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
