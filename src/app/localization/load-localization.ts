import { Lang } from '@xsolla/pay-station-sdk';

export async function loadMessages(locale: Lang): Promise<{ default: Record<string, string> }> {
  switch (locale) {
    case Lang.CN:
      return import(`@translations/cn.json`);
    case Lang.DE:
      return import(`@translations/de.json`);
    case Lang.EN:
      return import(`@translations/en.json`);
    case Lang.ES:
      return import(`@translations/es.json`);
    case Lang.FR:
      return import(`@translations/fr.json`);
    case Lang.JA:
      return import(`@translations/ja.json`);
    case Lang.KO:
      return import(`@translations/ko.json`);
    case Lang.PT:
      return import(`@translations/pt.json`);
    case Lang.RU:
      return import(`@translations/ru.json`);
    default:
      return import(`@translations/en.json`);
  }
}
