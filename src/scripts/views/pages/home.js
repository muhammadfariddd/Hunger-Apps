import CONFIG from "../../globals/config";
import { createItemTemplate } from "../template-creator";
import RestoDbSource from "../../data/data-source";

const Home = {
  async render() {
    return `
      <section class="hero">
        <img
          src="images/heros/hero-image_4.jpg"
          alt="Delicious food spread on a table"
          class="hero__image"
        />
      </section>

      <section class="content">
        <h1 class="content__heading">Explore Restaurants</h1>
        <div id="restaurants" class="restaurants"></div>
      </section>
        `;
  },

  async afterRender() {
    const kuliner = await RestoDbSource.home();
    const kulinerContainer = document.querySelector("#restaurants");
    kuliner.forEach((restaurant) => {
      kulinerContainer.innerHTML += createItemTemplate(restaurant);
    });
  },
};

export default Home;
