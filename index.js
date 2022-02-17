if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
    console.log('registered successfully')
};

if ('serviceWorker' in navigator && 'SyncManager' in window) {
    navigator.serviceWorker.ready.then(function (reg) {
        return reg.sync.register('c');
    });
};

Toasty();

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    showInstallPromotion();
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
    const installAppButton = document.getElementById('installAppButton');
    if (installAppButton) {
        installAppButton.addEventListener('click', function () {
            deferredPrompt.prompt();
        })
    }
});
var option = {
    animation: true, delay: 4000

};
function Toasty() {
    var toastHTMLElement = document.getElementById("EpicToast");
    var toastElement = new bootstrap.Toast(toastHTMLElement, option);
    toastElement.show();
}

console.log(Notification.permission);



//la permission pour la notification
function meNotifier() {
    Notification.requestPermission().then(function (result) {
        console.log("permission donnée");

    })
}
//envoie de la notication avec le boutton rafraichir 
function envoyerNotificationThreadUtilisateur() {
    if (Notification.permission === 'granted') {
        var options = {
            body: 'Ma première notification depuis index.js',
            requireInteraction: true
        };

        new Notification('Hello depuis index.js', options);
    } else {
        console.log("aucune notification car non permis");
    }


}






