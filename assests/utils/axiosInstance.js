import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://naveensutar.github.io/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});

export default axiosInstance;
