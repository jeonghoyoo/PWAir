// Initialize Firebase
var config = {
    apiKey: "AIzaSyDU7qAzxx86daA6X21euJMGc2ybQdkX2GM",
    authDomain: "pwair-jh.firebaseapp.com",
    databaseURL: "https://pwair-jh.firebaseio.com",
    projectId: "pwair-jh",
    storageBucket: "pwair-jh.appspot.com",
    messagingSenderId: "170817869641"
  };
  firebase.initializeApp(config);

// For Service Worker Push
/* var isSubscribed = false;
var swRegistration = null; */

// Service Worker Registration
/* if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(swReg) {
      console.log('ServiceWorker registration successful with scope: ', swReg.scope);

      swRegistration = swReg;
    }).catch(function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
 */