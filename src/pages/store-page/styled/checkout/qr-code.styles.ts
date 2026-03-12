import styled from 'styled-components';
import { pilatFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledQrCodeFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  .description {
    font-family: ${pilatFontFamily};
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 16px;
  }
`;
