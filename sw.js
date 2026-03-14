self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("streak-app").then(cache => {
      return cache.addAll([
        "/streak-counter/",
        "/streak-counter/index.html",
        "/streak-counter/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
