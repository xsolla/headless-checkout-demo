import axios from 'axios';

const tokenUrl = 'https://us-central1-headless-checkout-app.cloudfunctions.net/generateToken';
export const tokenApiClient = axios.create({
  baseURL: tokenUrl,
});
