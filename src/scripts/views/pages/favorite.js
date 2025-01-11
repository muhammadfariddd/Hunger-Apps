<<<<<<< HEAD
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
import { createItemTemplate } from '../template-creator.js';
=======
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createItemTemplate } from '../template-creator';
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restoran Favorit</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurantsContainer.innerHTML = '';
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
        <div class="restaurant-item__not__found">
          Tidak ada restoran favorit
        </div>
      `;
      return;
    }

    restaurantsContainer.innerHTML = restaurants
      .map((restaurant) => createItemTemplate(restaurant))
      .join('');
  },
};

export default Favorite;
