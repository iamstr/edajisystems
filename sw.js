let cacheName = "edajisystems-pwa";
let filesToCache = [
  "assets/css/argon.purified.min.css",
  "assets/css/plan.min.css",
  "assets/css/edaji.min.css",
  "assets/css/testimonial.min.css",
  "assets/css/animation.min.css",
  "assets/js/bootstrap.bundle.min.js",
  "assets/vendor/jquery/dist/jquery.min.js",
  "assets/js/argon.min.js",
  "assets/js/edaji.min.js",
  "https://fonts.googleapis.com/css?family=Poppins:300,400,600,700",
  
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
