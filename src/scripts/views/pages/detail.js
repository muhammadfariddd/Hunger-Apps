import UrlParser from '../../routes/url-parser';
import API_ENDPOINT from '../../globals/api-endpoint';
import {
  createDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../template-creator';
import RestoDbSource from '../../data/data-source';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurants" class="restaurants">
        <div class="loading">Loading restaurant detail...</div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurantContainer = document.querySelector('#restaurants');

      // Tampilkan loading
      restaurantContainer.innerHTML = '<loading-indicator></loading-indicator>';

      const restaurant = await RestoDbSource.detail(url.id);
      restaurantContainer.innerHTML = createDetailTemplate(restaurant);

      // Tambahkan review form ke container yang tepat
      const reviewFormContainer = document.querySelector(
        '#reviewFormContainer'
      );
      reviewFormContainer.innerHTML = '<review-form></review-form>';

      // Handle review submission
      const reviewForm = document.getElementById('reviewForm');
      reviewForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const reviewData = {
          id: url.id,
          name: document.getElementById('reviewName').value,
          review: document.getElementById('reviewText').value,
        };

        try {
          const response = await fetch(API_ENDPOINT.REVIEW, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Auth-Token': '12345', // Gunakan AUTH_TOKEN dari config
            },
            body: JSON.stringify(reviewData),
          });

          if (!response.ok) {
            throw new Error('Failed to submit review');
          }

          const result = await response.json();

          // Update reviews display
          const reviewList = document.querySelector('.review-list');
          reviewList.innerHTML = result.customerReviews
            .map(
              (review) => `
                <div class="review-item">
                  <p class="review-name">${review.name}</p>
                  <p class="review-date">${review.date}</p>
                  <p class="review-text">${review.review}</p>
                </div>
              `
            )
            .join('');

          // Reset form
          reviewForm.reset();
        } catch (error) {
          alert(`Failed to submit review: ${error.message}`);
        }
      });

      await this._renderLikeButton(restaurant);
    } catch (error) {
      const restaurantContainer = document.querySelector('#restaurants');
      restaurantContainer.innerHTML = `
        <div class="error">
          <p>Failed to load restaurant detail</p>
          <p>${error.message}</p>
          <button onclick="window.history.back()">Back</button>
        </div>
      `;
    }
  },

  async _renderLikeButton(restaurant) {
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    const { id } = restaurant;
    const isRestaurantExist = await FavoriteRestaurantIdb.getRestaurant(id);

    if (isRestaurantExist) {
      likeButtonContainer.innerHTML = createLikedButtonTemplate();
    } else {
      likeButtonContainer.innerHTML = createLikeButtonTemplate();
    }

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      if (!isRestaurantExist) {
        await FavoriteRestaurantIdb.putRestaurant(restaurant);
        this._renderLikeButton(restaurant);
      } else {
        await FavoriteRestaurantIdb.deleteRestaurant(id);
        this._renderLikeButton(restaurant);
      }
    });
  },
};

export default Detail;
