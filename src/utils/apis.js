import axios from './axios.customize';

const createUser = async (email, password) => {
   const API_URL = 'v1/api/register';
   const data = { email, password };
   return await axios.post(API_URL, data);
};

const handleLogin = async (email, password) => {
   const API_URL = 'v1/api/login';
   const data = { email, password };
   return await axios.post(API_URL, data);
};


export {
   createUser,
   handleLogin
};