import { Workbox } from 'workbox-window';

const swRegister = async () => {
<<<<<<< HEAD
  if ('serviceWorker' in navigator) {
    const workbox = new Workbox('./sw.bundle.js');

    try {
      await workbox.register();
      console.log('Service worker registered');
    } catch (error) {
      console.log('Failed to register service worker', error);
    }
=======
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  const workbox = new Workbox('./sw.bundle.js');

  try {
    await workbox.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
  }
};

export default swRegister;
