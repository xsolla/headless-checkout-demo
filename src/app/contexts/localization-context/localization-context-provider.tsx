import React, { FC, ReactNode, useEffect, useState } from 'react';
import { LocalizationContext } from './localization-context.ts';
import { Languages } from '../../localization/languages.enum.ts';
import { loadMessages } from '../../localization/load-localization.ts';
import { IntlProvider } from 'react-intl';

export const LocalizationContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState<Languages>(Languages.EN);
  const [messages, setMessages] = useState(null);

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
