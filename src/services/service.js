import axios from 'axios';
const URL = import.meta.env.VITE_API_URL

export const getGeneratedImage = (text) => {
  return axios.post(`${URL}/image/prompt`, { text: text });
}

export const getGeneratedImageToImage = (data) => {
  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
  }
  return axios.post(`${URL}/image/edit/prompt`, data, config);
}