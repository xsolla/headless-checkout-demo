import { Languages } from './languages.enum.ts';

export async function loadMessages(
  locale: Languages,
): Promise<{ default: Record<string, string> }> {
  switch (locale) {
    case Languages.CN:
      return import(`@translations/cn.json`);
    case Languages.DE:
      return import(`@translations/de.json`);
    case Languages.EN:
      return import(`@translations/en.json`);
    case Languages.ES:
      return import(`@translations/es.json`);
    case Languages.FR:
      return import(`@translations/fr.json`);
    case Languages.JA:
      return import(`@translations/ja.json`);
    case Languages.KO:
      return import(`@translations/ko.json`);
    case Languages.PT:
      return import(`@translations/pt.json`);
    case Languages.RU:
      return import(`@translations/ru.json`);
    default:
      return import(`@translations/en.json`);
  }
}
