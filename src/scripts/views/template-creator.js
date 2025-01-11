<<<<<<< HEAD
import CONFIG from '../globals/config.js';
=======
import CONFIG from '../globals/config';
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706

const createDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <h2 class="restaurant-item__title">${restaurant.name}</h2>
<<<<<<< HEAD
    <img class="restaurant-item__image" 
      src="${CONFIG.MEDIUM_BASE_IMAGE_URL}${restaurant.pictureId}" 
      alt="${restaurant.name}"
      onerror="this.onerror=null; this.src='./images/placeholder.jpg';" />
=======
    <img class="restaurant-item__image" src="${CONFIG.MEDIUM_BASE_IMAGE_URL}${
  restaurant.pictureId
}" alt="${restaurant.name}" />
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
    
    <div class="makan__info">
      <h3>Detail Restaurant</h3>
      <h4>Alamat</h4>
      <p>${restaurant.address}</p>
      <h4>Kota</h4>
      <p>${restaurant.city}</p>
      <h4>Deskripsi</h4>
      <p>${restaurant.description}</p>
      
      <h4>Menu Makanan</h4>
      <ul>
        ${restaurant.menus.foods
<<<<<<< HEAD
          .map((food) => `<li>${food.name}</li>`)
          .join('')}
=======
    .map((food) => `<li>${food.name}</li>`)
    .join('')}
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
      </ul>
      
      <h4>Menu Minuman</h4>
      <ul>
        ${restaurant.menus.drinks
<<<<<<< HEAD
          .map((drink) => `<li>${drink.name}</li>`)
          .join('')}
=======
    .map((drink) => `<li>${drink.name}</li>`)
    .join('')}
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
      </ul>
      
      <h4>Rating</h4>
      <p>${restaurant.rating}⭐</p>

      <div class="reviews">
        <h4>Customer Reviews</h4>
        <div class="review-list">
          ${restaurant.customerReviews
<<<<<<< HEAD
            .map(
              (review) => `
                <div class="review-item">
                  <p class="review-name">${review.name}</p>
                  <p class="review-date">${review.date}</p>
                  <p class="review-text">${review.review}</p>
                </div>
              `
            )
            .join('')}
        </div>
=======
    .map(
      (review) => `
            <div class="review-item">
              <p class="review-name">${review.name}</p>
              <p class="review-date">${review.date}</p>
              <p class="review-text">${review.review}</p>
            </div>
          `
    )
    .join('')}
         </div>
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
        <div id="reviewFormContainer"></div>
      </div>
    </div>

    <div class="like" id="likeButtonContainer"></div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like-button">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like-button">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createItemTemplate = (restaurant) => `
  <div class="restaurant-item">
<<<<<<< HEAD
    <img class="restaurant-item__image lazyload" 
      data-src="${CONFIG.SMALL_BASE_IMAGE_URL}${restaurant.pictureId}" 
      alt="${restaurant.name}"
      loading="lazy"
      onerror="this.onerror=null; this.src='./images/placeholder.jpg';">
    <div class="restaurant-item__content">
      <h2 class="restaurant-item__title">
        <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
      </h2>
=======
    <img class="restaurant-item__image" src="${CONFIG.SMALL_BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}">
    <div class="restaurant-item__content">
      <h2 class="restaurant-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
      <p class="restaurant-item__desc">${restaurant.city} | Rating: ${restaurant.rating}⭐</p>
      <p class="restaurant-item__description">${restaurant.description}</p>
    </div>
  </div>
`;

export {
  createItemTemplate,
  createDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
