import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import './views/components/loading-indicator';
import './views/components/review-form';

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
