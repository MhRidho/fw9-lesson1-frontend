import axios from 'axios';

const http = () => {
  const headers = {};
  return axios.create({
    headers,
    baseURL: process.env.REACT_APP_BACKEND_URL
  });
};

export default http;
