import { Price } from '@xsolla/pay-station-sdk/dist/core/finance-details/price.interface';

export interface ShopItem {
  id: string;
  price: Price;
}
