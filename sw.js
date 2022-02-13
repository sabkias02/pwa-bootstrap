

  this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
           '/pwa-bootstrap/',
           '/pwa-bootstrap/index.html',
            '/pwa-bootstrap/Algerie.png',
            '/pwa-bootstrap/icon-48x48.png',
           '/pwa-bootstrap/index.css',
           '/pwa-bootstrap/index.js',
            '/pwa-bootstrap/Picdessinges.png',
           '/pwa-bootstrap/SheratonAnnabaHotel.png',
           '/pwa-bootstrap/bootstrap-5.1.3-dist/js/bootstrap.min.js',
           '/pwa-bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css',
           '/pwa-bootstrap/pageHorsLigne.html',
           /* '/pwa-bootstrap/icons-1.7.2/font/fonts/bootstrap.icons.woff',
           '/pwa-bootstrap/icons-1.7.2/font/fonts/bootstrap.icons.woff2',
           '/pwa-bootstrap/icons-1.7.2/font/bootstrap.icons.css', */
           '/pwa-bootstrap/terrasse-restaurant-bekhchis.png'

        ]);
      })
    );
  });
  /*this.addEventListener('fetch', function(event) {
    console.log("Fetching ..." + event.request.url);
    event.respondWith(caches.match(event.request).then((response) => {
        if (response !== undefined) {
            return response;
        } else {
            console.log("Fetching from fetch ..." + event.request.url);
            return fetch(event.request);
        }
    }))
 })*/
 /* function enregistrerTagBgSync() {
 if ('serviceWorker' in navigator && 'SyncManager' in window) {
     navigator.serviceWorker.ready.then(function (reg) {
         return reg.sync.register('mon-tag');
     });
 };
}*/ 
this.addEventListener('fetch', function(event) {
 console.log("Fetching ..." + event.request.url);
 event.respondWith(cacheOrNetwork(event.request).catch(() => fallbackVersPageHorsLigne()));
});


function cacheOrNetwork(request) {
return fromCache(request).catch(() => fetch(request));
};

function fromCache(request) {
return caches.open('v1').then(function (cache) {
 return cache.match(request).then(function (matching) {
   return matching || Promise.reject('no-match');
 });
 
});
}

function fallbackVersPageHorsLigne() {
return caches.match('/pageHorsLigne.html');
} 






