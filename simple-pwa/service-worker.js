const CACHE_NAME = 'simple-pwa-cache-v1';
const urlsToCache = [
  '/web_programming/simple-pwa/index.html',
  '/web_programming/simple-pwa/manifest.json',
  '/web_programming/simple-pwa/app.js',
  '/web_programming/simple-pwa/service-worker.js',
  '/web_programming/simple-pwa/icon.png'
];

// Install the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch resources
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
