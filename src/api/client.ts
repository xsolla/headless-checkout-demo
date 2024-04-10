import axios from 'axios';

const tokenUrl = import.meta.env.VITE_GET_TOKEN_URL;
export const tokenApiClient = axios.create({
  baseURL: tokenUrl,
});
