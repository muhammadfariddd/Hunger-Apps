import { createItemTemplate } from '../template-creator';
import RestoDbSource from '../../data/data-source';

const Home = {
  async render() {
    return `
      <section class="hero">
        <img
          src="images/heros/hero-image_4.jpg"
          alt="Delicious food spread on a table"
          class="hero__image"
          onerror="this.onerror=null; this.src='images/placeholder.jpg';"
        />
      </section>

      <section class="content">
        <h1 class="content__heading">Explore Restaurants</h1>
        <div id="restaurants" class="restaurants">
          <div class="loading">Loading restaurants...</div>
        </div>
      </section>
    `;
  },

  async afterRender() {
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
