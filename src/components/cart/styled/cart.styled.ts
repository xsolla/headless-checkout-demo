import styled from 'styled-components';
import { screenXsMax } from '../../../shared/media-break-points.const.ts';

export const StyledCartContainer = styled.div`
  padding: 20px 20px 18px;
  border-radius: 16px;
  background: rgba(16, 15, 22, 0.6);
  box-shadow: 0 1.92px 7.69px 0 rgba(0, 0, 0, 0.18);

  .cart-items {
    &:first-child {
      margin-bottom: 16px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    margin-bottom: 20px;
    background: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: ${screenXsMax}) {
    gap: 12px;
    padding: 16px;

    .cart-items {
      &:first-child {
        margin-bottom: 12px;
      }
    }
  }
`;
