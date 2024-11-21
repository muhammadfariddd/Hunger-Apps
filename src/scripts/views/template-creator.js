import CONFIG from "../../globals/config";

const createDetailTemplate = (restaurant) => `
`;

const createItemTemplate = (restaurant) => `
     <img class="restaurant-item__image" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}">
//     <div class="restaurant-item__content">
//       <h2 class="restaurant-item__title"><a href="#">${restaurant.name}</a></h2>
//       <p class="restaurant-item__desc">${restaurant.city} | Rating: ${restaurant.rating}</p>
//       <p class="restaurant-item__description">${restaurant.description}</p>
//     </div>
`;

export { createItemTemplate, createDetailTemplate };
