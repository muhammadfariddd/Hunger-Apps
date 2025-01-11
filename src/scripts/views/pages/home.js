<<<<<<< HEAD
import { createItemTemplate } from '../template-creator.js';
import RestoDbSource from '../../data/data-source.js';
=======
import { createItemTemplate } from '../template-creator';
import RestoDbSource from '../../data/data-source';
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706

const Home = {
  async render() {
    return `
<<<<<<< HEAD
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
=======
      <section class="hero">
        <img
          src="images/heros/hero-image_4.jpg"
          alt="Delicious food spread on a table"
          class="hero__image"zz
        />
      </section>
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706

      <section class="content">
        <h1 class="content__heading">Explore Restaurants</h1>
        <div id="restaurants" class="restaurants">
<<<<<<< HEAD
          <loading-indicator></loading-indicator>
=======
          <div class="loading">Loading restaurants...</div>
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
        </div>
      </section>
    `;
  },

  async afterRender() {
<<<<<<< HEAD
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
=======
    const kulinerContainer = document.querySelector('#restaurants');
    try {
      // Tampilkan loading
      kulinerContainer.innerHTML =
        '<div class="loading">Loading restaurants...</div>';

      const kuliner = await RestoDbSource.home();

      // Bersihkan loading
      kulinerContainer.innerHTML = '';

      if (kuliner.length === 0) {
        kulinerContainer.innerHTML =
          '<div class="empty">Tidak ada restoran yang ditemukan</div>';
        return;
      }

      kuliner.forEach((restaurant) => {
        kulinerContainer.innerHTML += createItemTemplate(restaurant);
      });
    } catch (error) {
      kulinerContainer.innerHTML = `
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
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
