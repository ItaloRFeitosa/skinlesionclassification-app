import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/api/v1'
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if(error.response.status === 401 ) return {
      message: "unauthorized"
    }
    if(error.response.status === 404 ) return {
      message: "not found."
    }
  }
)

export default api;

export const predictService = async (imageData) => {

  return await api.post('/predict', imageData);

}
