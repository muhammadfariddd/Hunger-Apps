import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#nav__toggle'),
  drawer: document.querySelector('.nav__list'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// // DOM Elements
// const navList = document.querySelector('.nav__list');
// const hamburgerButton = document.createElement('a');
// const mainContent = document.querySelector('#restaurants');

// hamburgerButton.innerHTML = '☰';
// hamburgerButton.setAttribute('aria-label', 'Toggle navigation menu');
// hamburgerButton.setAttribute('href', '#');
// hamburgerButton.classList.add('nav__toggle');
// document.querySelector('.nav').prepend(hamburgerButton);

// hamburgerButton.addEventListener('click', () => {
//   navList.classList.toggle('open');
//   hamburgerButton.setAttribute(
//     'aria-expanded',
//     navList.classList.contains('open')
//   );
// });

// document.addEventListener('click', (event) => {
//   if (!event.target.closest('.nav') && navList.classList.contains('open')) {
//     navList.classList.remove('open');
//     hamburgerButton.setAttribute('aria-expanded', 'fal  se');
//   }
// });

// function createRestaurantCard(restaurant) {
//   const card = document.createElement('div');
//   card.classList.add('restaurant-item');
//   card.innerHTML = `
//     <img class="restaurant-item__image" src="${restaurant.pictureId}" alt="${restaurant.name}">
//     <div class="restaurant-item__content">
//       <h2 class="restaurant-item__title"><a href="#">${restaurant.name}</a></h2>
//       <p class="restaurant-item__desc">${restaurant.city} | Rating: ${restaurant.rating}</p>
//       <p class="restaurant-item__description">${restaurant.description}</p>
//     </div>
//   `;
//   return card;
// }

// async function fetchAndPopulateRestaurants() {
//   try {
//     const response = await fetch('data/DATA.json');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();

//     data.restaurants.forEach((restaurant) => {
//       const card = createRestaurantCard(restaurant);
//       mainContent.appendChild(card);
//     });
//   } catch (error) {
//     console.error('Error fetching restaurant data:', error);
//     mainContent.innerHTML =
//       '<p>Failed to load restaurants. Please try again later.</p>';
//   }
// }

// function initApp() {
//   fetchAndPopulateRestaurants();
// }

// document.addEventListener('DOMContentLoaded', initApp);
