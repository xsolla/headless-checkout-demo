import styled from 'styled-components';
import { montserratFontFamily } from '../../../../shared/styled/montserrat-font-family.const.ts';

export const StyledQrCodeFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  .description {
    font-family: ${montserratFontFamily};
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 16px;
  }
`;
