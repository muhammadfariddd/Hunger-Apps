/* global Feature, Scenario, Before, locate */

Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('adding a review to restaurant', async ({ I }) => {
  I.seeElement('.restaurant-item__title a');
  I.click(locate('.restaurant-item__title a').first());

  I.seeElement('#reviewForm');
  const reviewName = 'E2E Test User';
  const reviewText = 'This is an E2E test review';

  I.fillField('#reviewName', reviewName);
  I.fillField('#reviewText', reviewText);
  I.click('.submit-review');

  I.see(reviewName);
  I.see(reviewText);
});

module.exports = {};