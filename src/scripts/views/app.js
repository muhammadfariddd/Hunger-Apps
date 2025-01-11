<<<<<<< HEAD
import DrawerInitiator from '../utils/drawer-initiator.js';
import UrlParser from '../routes/url-parser.js';
import routes from '../routes/routes.js';
=======
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    // Tambahkan validasi
    if (!this._button) console.error('Button not found');
    if (!this._drawer) console.error('Drawer not found');
    if (!this._content) console.error('Content not found');

    this._initSkipLink();
    this._initialAppShell();
  }

  _initSkipLink() {
    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
<<<<<<< HEAD
    const pageModule = await page();
    this._content.innerHTML = await pageModule.render();
    await pageModule.afterRender();
=======
    this._content.innerHTML = await page.render();
    await page.afterRender();
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').scrollIntoView();
      skipLinkElem.blur();
    });
  }
}

export default App;
