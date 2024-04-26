import { tokenApiClient } from '../client';

export const getToken = async (parameters: {
  sandbox?: boolean;
  locale: string;
}): Promise<string> => {
  const { sandbox, locale } = parameters;
  const response = await tokenApiClient.get('', {
    params: { ...(sandbox ? { sandbox: '1' } : {}), locale },
  });

  if (response.data.error) {
    throw new Error(response.data.error.message);
  }

  return response.data.token;
};
