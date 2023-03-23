import axios, { AxiosError, AxiosResponse } from 'axios';
import showAlert from './swal';

export const initAxios = () => {
  axios.defaults.baseURL = import.meta.env.VITE_SERVER_API;
  axios.defaults.headers.common['X-API-KEY'] = import.meta.env.VITE_X_API_KEY;
  axios.defaults.headers.common.Authorization =
    localStorage.getItem('access_token');

  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        showAlert('You need to login first', 'error');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );
};

export const addTokenToHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = token;
};