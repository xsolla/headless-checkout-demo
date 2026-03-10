import styled from 'styled-components';
import { screenXsMax } from '../../../shared/media-break-points.const.ts';
import { graphikFontFamily } from '@shared/fonts/fonts.const.ts';

export const StyledUserName = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: 40px;
  font-family: ${graphikFontFamily};
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  user-select: none;

  .icon {
    width: 30px;
    height: 30px;

    img {
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: ${screenXsMax}) {
    padding-top: 4px;
  }
`;
