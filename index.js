if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
    console.log('registered successfully')
 };
 
// Initialize deferredPrompt for use later to show browser install prompt.
