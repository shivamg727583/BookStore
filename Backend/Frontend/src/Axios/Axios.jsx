import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL:  'http://localhost:3000/', // Base URL of your API
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use(
  (config) => {
    // You can add authorization tokens here if needed
    // Example: config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally here, like showing notifications
    return Promise.reject(error);
  }
);

export default api;
