const routes = {
  '/': () => import('../views/pages/home.js').then((module) => module.default),
  '/detail/:id': () => import('../views/pages/detail.js').then((module) => module.default),
  '/favorite': () => import('../views/pages/favorite.js').then((module) => module.default),
};

export default routes;
