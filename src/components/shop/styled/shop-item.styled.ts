import styled from 'styled-components';
export const StyledShopItemContainer = styled.div`
  display: block;
  height: 100%;
  border-radius: 16px;
  background: rgba(16, 15, 22, 0.6);
  box-shadow: 0 1.92px 7.69px 0 rgba(0, 0, 0, 0.18);

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    height: 150px;
    width: 100%;
    border-radius: 16px 16px 10px 10px;
    background: rgba(255, 255, 255, 0.05);

    img {
      width: auto;
      height: 100%;
    }
  }

  .details-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    padding: 13px 20px 20px 20px;

    .title {
      font-family: Montserrat, sans-serif;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      text-align: left;
    }

    .price {
      font-family: Montserrat, sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      text-align: left;
    }
  }
`;
