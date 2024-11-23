import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.API_BASE_URL}/list`, // endpoint untuk daftar restoran
  DETAIL: (id) => `${CONFIG.API_BASE_URL}/detail/${id}`, // endpoint untuk detail restoran
  REVIEW: `${CONFIG.API_BASE_URL}/review`,
};

export default API_ENDPOINT;
