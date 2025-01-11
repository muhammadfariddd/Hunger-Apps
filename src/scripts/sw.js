<<<<<<< HEAD
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
=======
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
import {
  StaleWhileRevalidate,
  CacheFirst,
  NetworkFirst,
<<<<<<< HEAD
} from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import CONFIG from "./globals/config";
=======
} from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import CONFIG from './globals/config';
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706

// Precache app shell dan assets statis
precacheAndRoute(self.__WB_MANIFEST);

// Cache API responses dengan Network First strategy
registerRoute(
  ({ url }) => url.href.startsWith(CONFIG.API_BASE_URL),
  new NetworkFirst({
    cacheName: CONFIG.API_CACHE_NAME,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24, // 24 jam
        maxEntries: 100,
      }),
    ],
  })
);

// Cache gambar dengan Cache First strategy
registerRoute(
<<<<<<< HEAD
  ({ request }) => request.destination === "image",
=======
  ({ request }) => request.destination === 'image',
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
  new CacheFirst({
    cacheName: CONFIG.IMAGE_CACHE_NAME,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 hari
        maxEntries: 50,
      }),
    ],
  })
);

// Cache font files
registerRoute(
  ({ request }) =>
<<<<<<< HEAD
    request.destination === "font" || request.url.includes("fonts/fontawesome"),
  new CacheFirst({
    cacheName: "fonts-cache",
=======
    request.destination === 'font' || request.url.includes('fonts/fontawesome'),
  new CacheFirst({
    cacheName: 'fonts-cache',
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 hari
        maxEntries: 30,
      }),
    ],
  })
);

// Cache halaman dengan StaleWhileRevalidate
registerRoute(
<<<<<<< HEAD
  ({ request }) => request.mode === "navigate",
  new StaleWhileRevalidate({
    cacheName: "pages-cache",
=======
  ({ request }) => request.mode === 'navigate',
  new StaleWhileRevalidate({
    cacheName: 'pages-cache',
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
  })
);
