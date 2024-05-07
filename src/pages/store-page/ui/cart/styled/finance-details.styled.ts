import styled from 'styled-components';

export const StyledFinanceDetails = styled.div`
  psdk-finance-details {
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;

    .cart-items {
      display: none;
    }

    .divider {
      margin: 0 0 20px;
      border: none;
      background: rgba(255, 255, 255, 0.15);
    }

    .subtotal-row,
    .total-details-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      color: rgba(255, 255, 255, 0.5);

      &:last-child {
        margin-bottom: 0;
      }

      .title,
      .price {
        font-family: Montserrat, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
      }
    }

    .transaction-details {
      display: flex;
      justify-content: space-between;
      padding-top: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
    }

    .transaction-invoice {
      .title {
        margin-bottom: 4px;
        color: rgba(255, 255, 255, 0.5);
        font-family: GraphikLCWebUikit, sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
      }

      .content {
        font-family: GraphikLCWebUikit, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
      }
    }

    .transaction-invoice:nth-child(2) {
      text-align: right;
    }
  }

  psdk-total {
    .total-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      color: rgba(255, 255, 255, 1);

      .title {
        font-family: Montserrat, sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
      }

      .price {
        font-family: Montserrat, sans-serif;
        font-size: 28px;
        font-weight: 700;
        line-height: 34px;
      }
    }
  }
`;
