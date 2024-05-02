import styled from 'styled-components';

export const StyledShopContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 10px));
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
`;
