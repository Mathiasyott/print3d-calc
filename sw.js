const CACHE = 'print3d-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // For API calls, always go network-only
  if (e.request.url.includes('api.anthropic.com')) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(response) {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE).then(function(cache) {
            cache.put(e.request, clone);
          });
        }
        return response;
      });
    }).catch(function() {
      return caches.match('./index.html');
    })
  );
});
