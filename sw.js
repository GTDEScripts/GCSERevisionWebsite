// Service Worker for GCSE Revision Website
// Enables offline functionality and caching

const CACHE_NAME = 'gcse-revision-v9';
const urlsToCache = [
  './',
  './index.html',
  './css/styles.css',
  './manifest.json',
  './js/app.js',
  './js/features.js',
  './js/subjects.js',
  './js/utils.js',
  './js/subjects/maths/edexcel/maths-data.js',
  './js/subjects/sciences/biology/aqa/biology.js',
  './js/subjects/sciences/chemistry/aqa/chemistry.js',
  './js/subjects/sciences/physics/aqa/physics.js',
  './js/subjects/sciences/biology/edexcel/biology-edexcel-data.js',
  './js/subjects/sciences/chemistry/edexcel/chemistry-edexcel-data.js',
  './js/subjects/sciences/physics/edexcel/physics-edexcel-data.js',
  './js/subjects/english/aqa/english-literature.js',
  './js/subjects/english/aqa/english-language.js',
  './js/subjects/poetry/aqa/power-conflict.js',
  './js/subjects/geography/aqa/geography.js',
  './js/subjects/business/ocr/business.js',
  './js/subjects/computer-science/ocr/computer-science.js',
  './js/quiz/bio-quiz.js',
  './js/quiz/chem-quiz.js',
  './js/quiz/phys-quiz.js',
  './js/quiz/geography-quiz.js',
  './js/quiz/business-quiz.js',
  './js/quiz/computer-science-quiz.js',
  './img/logo-light.png',
  './img/logo-dark.png',
  './img/logo-favicon.png'
];

// Install: precache everything in parallel; tolerate individual failures
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.all(
        urlsToCache.map(url => cache.add(url).catch(() => {}))
      ))
      .then(() => self.skipWaiting())
  );
});

// Activate: drop old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(name => name !== CACHE_NAME ? caches.delete(name) : null)
    )).then(() => self.clients.claim())
  );
});

// Fetch:
//   HTML  -> network-first  (always fresh page shell)
//   JS    -> stale-while-revalidate (instant from cache, refresh in bg)
//   other -> cache-first   (CSS, fonts, images)
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || !req.url.startsWith('http')) return;

  const isHTML = req.destination === 'document';
  const isJS = req.url.endsWith('.js');

  if (isHTML) {
    event.respondWith(
      fetch(req).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, clone));
        }
        return res;
      }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  if (isJS) {
    event.respondWith(
      caches.match(req).then(cached => {
        const networkFetch = fetch(req).then(res => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(req, clone));
          }
          return res;
        }).catch(() => cached);
        return cached || networkFetch;
      })
    );
    return;
  }

  // Cache-first for CSS, fonts, images, manifest
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      if (res && res.status === 200) {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(req, clone));
      }
      return res;
    })).catch(() => caches.match('./index.html'))
  );
});
