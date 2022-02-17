

this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('v1').then(function (cache) {
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


this.addEventListener('activate', function (event) {
  event.waitUntil(function () {

  }
  );
});

this.addEventListener('fetch', function (event) {
  console.log("Fetching ..." + event.request.url);
  event.respondWith(cacheOrNetwork(event.request).catch(() => fallbackVersPageHorsLigne()));
});

async function cacheOrNetwork(request) {
  try {
    return await fromCache(request);
  } catch {
    return await fetch(request);
  }
};

async function fromCache(request) {
  const cache = await caches.open('v1');
  const matching = await cache.match(request);
  return matching || Promise.reject('no-match');
}

function fallbackVersPageHorsLigne() {
  return caches.match('/pwa-bootstrap/pageHorsLigne.html');
}

/*this.addEventListener('push', function (e) {
  console.log("push recu: " + e);
  envoyerNotification();
});


function envoyerNotification() {
  if (Notification.permission === 'granted') {
      var options = {
          body: 'Ma première notification',
          requireInteraction: true
      };

      this.registration.showNotification('Hello', options);
  } else {
      console.log("aucune notification car non permis");
  }
}*/
self.addEventListener('sync', function (event) {
  if (event.tag == 'c') {
    event.envoyerNotificationThreadUtilisateur();
  }
});




