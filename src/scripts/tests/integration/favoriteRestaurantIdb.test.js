import { describe, it, expect, beforeEach } from '@jest/globals';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { itActsAsFavoriteRestaurantModel } from '../contracts/favoriteRestaurantContract';

describe('Favorite Restaurant Idb Integration Test', () => {
  beforeEach(async () => {
    // Clear indexedDB before each test
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    restaurants.forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);

  it('should be able to add and get multiple restaurants', async () => {
    const restaurants = [
      { id: 'r1', name: 'Restaurant 1' },
      { id: 'r2', name: 'Restaurant 2' },
      { id: 'r3', name: 'Restaurant 3' },
    ];

    await Promise.all(
      restaurants.map((restaurant) => FavoriteRestaurantIdb.putRestaurant(restaurant))
    );

    const storedRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(storedRestaurants).toEqual(restaurants);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    const invalidRestaurant = { aProperty: 'property' };
    await expect(FavoriteRestaurantIdb.putRestaurant(invalidRestaurant))
      .rejects.toThrow('restaurant tidak memiliki ID yang valid');
  });
});