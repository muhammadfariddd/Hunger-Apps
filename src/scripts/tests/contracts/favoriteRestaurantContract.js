import { it, expect } from '@jest/globals';

const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    await favoriteRestaurant.putRestaurant({ id: 1 });
    await favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriteRestaurant.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favoriteRestaurant.getRestaurant(3))
      .toBeNull();
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    const invalidRestaurant = { aProperty: 'property' };
    await expect(favoriteRestaurant.putRestaurant(invalidRestaurant))
      .rejects.toThrow('restaurant tidak memiliki ID yang valid');
  });

  it('can return all of the restaurants that have been added', async () => {
    const restaurants = [
      { id: 1 },
      { id: 2 },
    ];

    await favoriteRestaurant.putRestaurant(restaurants[0]);
    await favoriteRestaurant.putRestaurant(restaurants[1]);

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual(restaurants);
  });

  it('should remove favorite restaurant', async () => {
    await favoriteRestaurant.putRestaurant({ id: 1 });
    await favoriteRestaurant.putRestaurant({ id: 2 });
    await favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(1);

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteRestaurantModel };