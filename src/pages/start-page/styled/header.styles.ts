import styled from 'styled-components';
import { screenXsMax } from '../../../shared/media-break-points.const.ts';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 9px;

  .company {
    padding: 0;
    margin: 38px 0 0;
    font-size: 22px;
    font-weight: 600;
    font-family: SharpgroteskSmb20, sans-serif;
    line-height: 24px;
    text-align: left;
  }

  @media (max-width: ${screenXsMax}) {
    margin-bottom: 50px;

    .company {
      margin: 20px 0 0;
      font-size: 19.5px;
    }
  }
`;

export const StyledLogo = styled.div`
  margin-right: 29px;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${screenXsMax}) {
    margin-right: 19px;
    width: 65px;
    height: 65px;
  }
`;
