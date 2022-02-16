

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
 
this.addEventListener('activate', function(event) {
  event.waitUntil(function(){
    
  }
  );
});

this.addEventListener('fetch', function(event) {
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

this.addEventListener('push', function (e) {
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
}


/* this.addEventListener('fetch', function(event) {
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
return caches.match('/pwa-bootstrap/pageHorsLigne.html');
}  */


/*self.addEventListener('fetch', (event) => {
  // We only want to call event.respondWith() if this is a navigation request
  // for an HTML page.
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        // First, try to use the navigation preload response if it's supported.
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }

        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        // catch is only triggered if an exception is thrown, which is likely
        // due to a network error.
        // If fetch() returns a valid HTTP response with a response code in
        // the 4xx or 5xx range, the catch() will NOT be called.
        console.log('Fetch failed; returning offline page instead.', error);

        const cache = await caches.open('v1');
        const cachedResponse = await cache.match('/pwa-bootstrap/pageHorsLigne.html');
        return cachedResponse;
      }
    })());
  }
});*/



