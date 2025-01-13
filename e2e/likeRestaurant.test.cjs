/* global Feature, Scenario, Before, locate */

const { assert } = require('chai');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('Tidak ada restoran favorit', '.restaurant-item__not__found');
});

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran favorit', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant-item__title a');

  const firstRestaurant = locate('.restaurant-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // Unliking restaurant
  I.click('.restaurant-item__title a');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restoran favorit', '.restaurant-item__not__found');
});

module.exports = {};