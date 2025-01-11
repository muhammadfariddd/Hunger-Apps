import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit.js';
import './views/components/loading-indicator.js';
import './views/components/review-form.js';

const app = new App({
  button: document.querySelector('#nav__toggle'),
  drawer: document.querySelector('.nav__list'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
