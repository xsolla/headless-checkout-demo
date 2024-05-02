import { Price } from '@xsolla/pay-station-sdk/dist/core/finance-details/price.interface';

export interface ShopItemProps {
  id: string;
  price: Price;
}
