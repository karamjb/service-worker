navigator.serviceWorker.register('./serviceWorker.js').then(serviceWorker => {
    console.log('success to register the service worker');
    serviceWorker.postMessage('Hello service worker !!');
}, err => {
    console.log('Error', 'Installing the service worker failed!!');
    console.log('Error', err);
});
