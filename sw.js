const CACHE_NAME = 'devs-kitchen-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      // Basic fallback or nothing
      return new Response('Network error occurred.');
    })
  );
});
