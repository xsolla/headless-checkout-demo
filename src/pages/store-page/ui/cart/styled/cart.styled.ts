import styled from 'styled-components';
import { colors } from '@shared/colors.const.ts';

export const StyledCartContainer = styled.div`
  padding: 16px;
  border-radius: 8px;
  background: ${colors.bg.primary};
  box-shadow: 0 1.92px 7.69px 0 rgba(0, 0, 0, 0.08);

  .divider {
    width: 100%;
    height: 1px;
    margin-bottom: 20px;
    background: rgba(0, 0, 0, 0.1);
  }
`;
