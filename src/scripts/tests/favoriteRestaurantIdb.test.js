import { describe, it, expect, afterEach } from '@jest/globals';
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb.js';

describe('Favorite Restaurant Idb Test', () => {
  const testRestaurant = {
    id: 'test-id',
    name: 'Test Restaurant',
    description: 'Test Description',
    pictureId: 'test-picture',
    city: 'Test City',
    rating: 4.5,
  };

  afterEach(async () => {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    restaurants.forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  it('should be able to add and get restaurant', async () => {
    await FavoriteRestaurantIdb.putRestaurant(testRestaurant);
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(testRestaurant.id);
    expect(restaurant).toEqual(testRestaurant);
  });

  it('should return null when getting non-existent restaurant', async () => {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant('non-existent-id');
    expect(restaurant).toBeNull();
  });

  it('should be able to delete restaurant', async () => {
    await FavoriteRestaurantIdb.putRestaurant(testRestaurant);
    await FavoriteRestaurantIdb.deleteRestaurant(testRestaurant.id);
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(testRestaurant.id);
    expect(restaurant).toBeNull();
  });

  it('should handle deleting non-existent restaurant', async () => {
    await expect(FavoriteRestaurantIdb.deleteRestaurant('non-existent-id'))
      .resolves.not.toThrow();
  });
});