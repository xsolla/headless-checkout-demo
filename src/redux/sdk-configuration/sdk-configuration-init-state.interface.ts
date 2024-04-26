import { Lang } from '@xsolla/pay-station-sdk';

export interface SdkConfigurationInitState {
  token: string | null;
  sandbox: string | null;
  language: Lang;
  isFetching: boolean;
  tokenGenerated: boolean;
}
