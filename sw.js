self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('stc-cbt-v1').then((cache) => {
            // Pastikan file-file utama ini benar-benar ada di folder Anda
            return cache.addAll([
                './',
                './index.html',
                './logo_pgri.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
