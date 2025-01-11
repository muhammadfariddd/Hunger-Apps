<<<<<<< HEAD
import CONFIG from './config.js';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
=======
import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.API_BASE_URL}/list`, // endpoint untuk daftar restoran
  DETAIL: (id) => `${CONFIG.API_BASE_URL}/detail/${id}`, // endpoint untuk detail restoran
  REVIEW: `${CONFIG.API_BASE_URL}/review`,
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
};

export default API_ENDPOINT;
