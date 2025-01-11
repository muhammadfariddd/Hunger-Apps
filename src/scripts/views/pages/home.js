import { createItemTemplate } from '../template-creator.js';
import RestoDbSource from '../../data/data-source.js';

const Home = {
  async render() {
    return `
      <div class="hero">
        <picture>
          <source media="(max-width: 600px)" srcset="images/heros/hero-image_4-small.jpg">
          <source media="(min-width: 601px)" srcset="images/heros/hero-image_4.jpg">
          <img
            src="images/heros/hero-image_4.jpg"
            alt="Delicious food spread on a table"
            class="hero__image"
            onerror="this.onerror=null; this.src='images/placeholder.jpg';"
          >
        </picture>
      </div>

      <section class="content">
        <h1 class="content__heading">Explore Restaurants</h1>
        <div id="restaurants" class="restaurants">
          <loading-indicator></loading-indicator>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    try {
      const restaurants = await RestoDbSource.home();

      if (restaurants.length === 0) {
        restaurantsContainer.innerHTML = '<div class="empty">Tidak ada restoran yang ditemukan</div>';
        return;
      }

      restaurantsContainer.innerHTML = restaurants
        .map((restaurant) => createItemTemplate(restaurant))
        .join('');
    } catch (error) {
      restaurantsContainer.innerHTML = `
        <div class="error">
          <p>Gagal memuat data restoran</p>
          <p>${error.message}</p>
          <button onclick="location.reload()">Coba Lagi</button>
        </div>
      `;
    }
  },
};

export default Home;
