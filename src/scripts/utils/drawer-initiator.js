const DrawerInitiator = {
  init({ button, drawer }) {
    if (!button || !drawer) {
      console.error('Button or drawer not found');
      return;
    }

    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      this._toggleDrawer(event, drawer);
    });

    // Tutup drawer saat klik di luar
    document.addEventListener('click', (event) => {
      if (
        !drawer.contains(event.target) &&
        !button.contains(event.target) &&
        drawer.classList.contains('open')
      ) {
        this._closeDrawer(event, drawer);
      }
    });

    // Tutup drawer saat klik link
    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        this._closeDrawer(null, drawer);
      });
    });
  },

  _toggleDrawer(event, drawer) {
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
