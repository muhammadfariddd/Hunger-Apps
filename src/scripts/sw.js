import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import CONFIG from './globals/config';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

// Cache API requests
registerRoute(
  ({ url }) => url.href.startsWith(CONFIG.API_BASE_URL),
  new StaleWhileRevalidate({
    cacheName: CONFIG.API_CACHE_NAME,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Hari
        maxEntries: 100,
      }),
    ],
  })
);

// Cache images
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: CONFIG.IMAGE_CACHE_NAME,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Hari
        maxEntries: 50,
      }),
    ],
  })
);

// Fallback offline page
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CONFIG.PRECACHE_NAME).then((cache) => {
      return cache.addAll(['/offline.html', '/icons/offline.png']);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || caches.match('/offline.html');
      })
    );
  }
});
