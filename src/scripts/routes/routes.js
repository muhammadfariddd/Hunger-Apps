<<<<<<< HEAD
const routes = {
  '/': () => import('../views/pages/home.js').then((module) => module.default),
  '/detail/:id': () => import('../views/pages/detail.js').then((module) => module.default),
  '/favorite': () => import('../views/pages/favorite.js').then((module) => module.default),
=======
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home, // default page
  '/favorite': Favorite,
  '/detail/:id': Detail,
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
};

export default routes;
