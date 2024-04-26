import { Price } from '@xsolla/pay-station-sdk/dist/core/finance-details/price.interface';

export interface CartItemProps {
  id: string;
  price: Price;
  removable?: boolean;
}
