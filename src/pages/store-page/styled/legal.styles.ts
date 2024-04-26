import styled from 'styled-components';

export const StyledLegal = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);

  a {
    color: rgba(210, 206, 254, 1);
    text-decoration: none;
  }
  .company {
    display: none;
  }
  .legal-links {
    display: flex;
    column-gap: 3px;
    margin-top: 20px;
  }
`;
