import { openDB } from 'idb';
import CONFIG from '../globals/config.js';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    if (!id) {
      return null;
    }
    const db = await dbPromise;
    const restaurant = await db.get(OBJECT_STORE_NAME, id);
    return restaurant || null;
  },

  async getAllRestaurants() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putRestaurant(restaurant) {
    if (!restaurant.id) {
      throw new Error('restaurant tidak memiliki ID yang valid');
    }

    const db = await dbPromise;
    return db.put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    const db = await dbPromise;
    await db.delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestaurantIdb;
