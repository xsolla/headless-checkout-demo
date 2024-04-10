import { tokenApiClient } from '../client';

export const getToken = async (parameters: { sandbox: boolean }): Promise<string> => {
  const { sandbox } = parameters;
  const response = await tokenApiClient.get('', {
    params: { ...(sandbox ? { sandbox: '1' } : {}) },
  });
  if (response.data.error) {
    throw new Error(response.data.error.message);
  }

  return response.data.result;
};
