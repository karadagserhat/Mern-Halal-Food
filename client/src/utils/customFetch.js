import axios from 'axios';

const customFetch = axios.create({
  // baseURL: 'https://halal-food-backend-mern.onrender.com/api/v1',
  baseURL: '/api/v1',
  // baseURL: 'https://grumpy-boa-tank-top.cyclic.cloud/api/v1',
  // withCredentials: true,
});

export default customFetch;
