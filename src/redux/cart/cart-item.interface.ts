import { Price } from '@xsolla/pay-station-sdk/dist/core/finance-details/price.interface';

export interface CartItem {
  id: string;
  title: string;
  price: Price;
  removable?: boolean;
}
