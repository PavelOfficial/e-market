import _axios from 'axios';

export const axios = _axios.create({
  baseURL: 'https://localhost:8080/',
  timeout: 1000,
});
