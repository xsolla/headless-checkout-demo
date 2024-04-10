import { Themes } from '@xsolla/pay-station-sdk/dist/core/customization/themes.type';
import { Lang } from '@xsolla/pay-station-sdk/dist/core/i18n/lang.enum';

// todo add init interface into pay-station-sdk
export interface SdkInitConfig {
  isWebview?: boolean;
  sandbox?: boolean;
  theme?: Themes;
  language?: Lang;
}
