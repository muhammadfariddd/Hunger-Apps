import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    const workbox = new Workbox('./sw.bundle.js');

    try {
      await workbox.register();
      console.log('Service worker registered');
    } catch (error) {
      console.log('Failed to register service worker', error);
    }
  }
};

export default swRegister;
