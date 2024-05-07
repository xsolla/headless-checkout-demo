import { tokenApiClient } from '../client';

export const getToken = async (parameters: {
  sandbox?: boolean;
  locale: string;
  items: string[];
}): Promise<string> => {
  const { sandbox, locale, items } = parameters;
  const response = await tokenApiClient.get('', {
    params: { ...(sandbox ? { sandbox: '1' } : {}), locale, items: items.join(',') },
  });

  if (response.data.error) {
    throw new Error(response.data.error.message);
  }

  return response.data.token;
};
