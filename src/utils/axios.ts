import axios from 'axios';
import { backendURL as baseUrl } from '../config';

const certifyAxios = axios.create({
  baseURL: baseUrl
})

certifyAxios.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'There is an error!'
    )
);

export default certifyAxios;
