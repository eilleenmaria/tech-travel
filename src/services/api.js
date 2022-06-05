import axios from 'axios';

const api = axios.create({
  baseURL: 'https://629bbe05cf163ceb8d1d6d3d.mockapi.io/',
});

export default api;
