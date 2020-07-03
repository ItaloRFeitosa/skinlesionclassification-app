import api from './api';

export const predictLesion = async (imageData) => {
  return await api.post('/predict', imageData);
}

export const getResult = async (id) => {
  return await api.get(`/predict/${id}`);
}
