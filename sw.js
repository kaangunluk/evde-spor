// Bu dosya, uygulamanın internet olmadığı durumlarda bile çalışabilmesini sağlar.
const CACHE_NAME = 'evde-spor-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Service Worker kurulduğunda, ana dosyaları önbelleğe al.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Ağdan gelen istekleri kontrol et, önbellekte varsa onu göster.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});