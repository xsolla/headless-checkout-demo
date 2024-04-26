import styled from 'styled-components';

export const StyledPaymentMethodSkeleton = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  border-radius: 16px;
  background: linear-gradient(
    90deg,
    rgba(16, 15, 22, 0.6) 0%,
    rgba(217, 217, 217, 0.1) 12%,
    rgba(16, 15, 22, 0.6) 24%
  );
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
