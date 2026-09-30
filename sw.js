// Only change this if the icons or manifest change. Content edits to index.html never need it.
const CACHE = 'tq-static-v2';
const STATIC = [
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(STATIC);
    // Keep an offline copy of the page from day one. It's still fetched network-first below.
    try {
      const res = await fetch('./', { cache: 'no-cache' });
      if (res.ok) await cache.put('./index.html', res);
    } catch (e) {}
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    // Always try the network first so every online open gets the latest version.
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const res = await fetch(url.href, { cache: 'no-cache', credentials: 'same-origin' });
        if (res.ok) cache.put('./index.html', res.clone());
        return res;
      } catch (e) {
        const cached = await cache.match('./index.html');
        return cached || Response.error();
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(req);
    return cached || fetch(req);
  })());
});
