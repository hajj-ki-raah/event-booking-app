const CACHE_NAME = "booking-app-cache-v1";

// Files to cache
const urlsToCache = [
    "/",
    "/index.html",
    "/assets/css/style.css",
    "/assets/js/firebaseConfig.js",
    "/assets/js/app.js",
    "/assets/js/auth.js",
    "/assets/js/events.js",
    "/assets/js/booking.js",
    "/assets/js/main.js",
    "/assets/js/sw",
    "/assets/js/userSession.js",
]
// Install a service worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Cache and return requests
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Update a service worker
self.addEventListener("activate", (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
