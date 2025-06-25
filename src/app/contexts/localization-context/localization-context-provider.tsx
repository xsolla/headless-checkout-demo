import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { LocalizationContext } from './localization-context.ts';
import { loadMessages } from '../../localization/load-localization.ts';
import { IntlProvider } from 'react-intl';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks.ts';
import { selectCurrentLanguage, setLanguage } from '../../../redux/sdk-configuration';
import { Lang } from '@xsolla/pay-station-sdk';

type Message = Record<string, string>;

export const LocalizationContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const currentLocale = useAppSelector(selectCurrentLanguage);
  const dispatch = useAppDispatch();
  const setCurrentLocale = useCallback(
    (locale: Lang) => dispatch(setLanguage(locale)),
    [currentLocale],
  );
  const [messages, setMessages] = useState<Message | undefined>(undefined);

  useEffect(() => {
    loadMessages(currentLocale).then((data) => setMessages(data.default));
  }, [currentLocale]);

  return (
    <LocalizationContext.Provider value={{ currentLocale, setCurrentLocale }}>
      <IntlProvider locale={currentLocale} messages={messages}>
        {messages && children}
      </IntlProvider>
    </LocalizationContext.Provider>
  );
};
