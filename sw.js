self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('fitness-app-v1').then((cache) => {
            return cache.addAll([
                './index.html',
                './manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : { title: 'Spor Günlüğüm', body: 'Görevlerini tamamlamayı unutma!' };
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBmaWxsPSIjMTBiOTgxIj48cGF0aCBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMCA0NDhjLTExMCAwLTE5OS04OS0xOTktMTk5UzE0NiA1NyAyNTYgNTdzMTk5IDg5 199 199tODktMTk5IDE5OS0xOTl6Ii8+PC9zdmc+',
            badge: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBmaWxsPSIjMTBiOTgxIj48cGF0aCBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMCA0NDhjLTExMCAwLTE5OS04OS0xOTktMTk5UzE0NiA1NyAyNTYgNTdzMTk5IDg5 199 199tODktMTk5IDE5OS0xOTl6Ii8+PC9zdmc+'
        })
    );
});
