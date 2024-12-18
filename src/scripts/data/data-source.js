import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestoDbSource {
  static async home() {
    try {
      const response = await fetch(API_ENDPOINT.HOME);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error('Error fetching restaurants:', error);

      // Coba ambil data dari cache
      try {
        const cache = await caches.open(CONFIG.API_CACHE_NAME);
        const cachedResponse = await cache.match(API_ENDPOINT.HOME);

        if (cachedResponse) {
          const cachedData = await cachedResponse.json();
          return cachedData.restaurants;
        }
      } catch (cacheError) {
        console.error('Error fetching from cache:', cacheError);
      }
    }
  }

  static async detail(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.error('Error fetching restaurant detail:', error);

      // Coba ambil data dari cache
      try {
        const cache = await caches.open(CONFIG.API_CACHE_NAME);
        const cachedResponse = await cache.match(API_ENDPOINT.DETAIL(id));

        if (cachedResponse) {
          const cachedData = await cachedResponse.json();
          return cachedData.restaurant;
        }
      } catch (cacheError) {
        console.error('Error fetching from cache:', cacheError);
      }
    }
  }
}

export default RestoDbSource;
