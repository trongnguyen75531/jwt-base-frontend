import axios from 'axios';

// Set config defaults when creating the instance
const instance = axios.create({
   baseURL: import.meta.env.VITE_BACKEND_URL
});

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = localStorage.getItem('token');

// Add a request interceptor
instance.interceptors.request.use(function (config) {
   const token = localStorage.getItem('token');
   if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
   }
   // Do something before request is sent
   return config;
}, function (error) {
   // Do something with request error
   return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
   console.log("Check response axios file", response);
   // Any status code that lie within the range of 2xx cause this function to trigger
   // Do something with response data
   return response;
}, function (error) {
   console.log("Check error axios.customize file", error);
   if (error.response && error.response.data) {
      return error.response.data;
   }
   // Any status codes that falls outside the range of 2xx cause this function to trigger
   // Do something with response error
   return Promise.reject(error);
});

export default instance;