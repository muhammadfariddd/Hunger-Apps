import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
  static async home() {
    try {
      const response = await fetch(API_ENDPOINT.HOME);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      if (!navigator.onLine) {
        throw new Error(
          'Tidak ada koneksi internet. Silakan periksa koneksi Anda.'
        );
      }
      throw new Error('Gagal memuat data restoran. Silakan coba lagi.');
    }
  }

  static async detail(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.error('Error fetching restaurant detail:', error);
      if (!navigator.onLine) {
        throw new Error(
          'Tidak ada koneksi internet. Silakan periksa koneksi Anda.'
        );
      }
      throw new Error('Gagal memuat detail restoran. Silakan coba lagi.');
    }
  }
}

export default RestoDbSource;
