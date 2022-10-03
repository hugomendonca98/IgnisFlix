import axios from 'axios';

const api = axios.create({
  baseURL: 'https://teste.ignisdigital.tec.br',
});

export default api;
