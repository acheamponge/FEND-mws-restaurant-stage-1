var staticCacheName = 'mws-static-v1';

/**
 * Install Service worker and cache all pages and assets required for offline access
 */
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(staticCacheName).then((cache) => {
    return cache.addAll(['/', 'js/main.js', 'js/restaurant_info.js', 'js/dbhelper.js', 'css/styles.css',
      'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg',
      'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
      'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
      'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png',
      'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png'
      ]);
  }));
});

/**
 * Activate Service worker and delete old cache (if any) add new cache
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((cacheNames) => {
    return Promise.all(cacheNames.filter((cacheName) => {
      return cacheName.startsWith('mws-') && cacheName != staticCacheName;
    }).map((cacheName) => {
      return caches['delete'](cacheName);
    }));
  }));
});

/**
 * Intercept all request and match against the cache to respond accordingly
 */
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((response) => {
    // console.log(response);
    return response || fetch(event.request);
  }));
});

/**
 * listen for the "message" event, and call
 * skipWaiting if you get the appropriate message
 */
self.addEventListener('message', (event) => {
  if (event.data) {
    console.log('Messgae received:' + event.data);
    self.skipWaiting();
  }
});