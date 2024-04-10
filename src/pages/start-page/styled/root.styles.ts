import styled from 'styled-components';
import { screenXsMax } from '../../../shared/media-break-points.const.ts';
export const StyledRootDiv = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-left: 60px;
  background: rgb(7, 7, 8);
  color: #fff;
  overflow: hidden;
  font-family: SharpgroteskSmb, sans-serif;

  @media (max-width: ${screenXsMax}) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;
