import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import {
  StaleWhileRevalidate,
  CacheFirst,
  NetworkFirst,
} from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import CONFIG from './globals/config';

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
  ({ request }) => request.destination === 'image',
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

// Cache halaman dengan StaleWhileRevalidate
registerRoute(
  ({ request }) => request.mode === 'navigate',
  new StaleWhileRevalidate({
    cacheName: 'pages-cache',
  })
);
