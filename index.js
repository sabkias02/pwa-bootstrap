if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/pwa-bootstrap/sw.js');
    console.log('registered successfully')
 };
 
// Initialize deferredPrompt for use later to show browser install prompt.
