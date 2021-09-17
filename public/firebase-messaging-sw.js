importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// importScripts("https://www.gstatic.com/firebasejs/9.0.1/firebase-messaging.js");
// importScripts("https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js");
  // TODO: Add SDKs for Firebase products that you want to use
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

const firebaseConfig = {
  apiKey: "AIzaSyBDgjn2V1Q2Xc8HeC9m-ksuxyqgL_j5WGM",
  authDomain: "invictus-iitm.firebaseapp.com",
  databaseURL: "https://invictus-iitm-default-rtdb.firebaseio.com",
  projectId: "invictus-iitm",
  storageBucket: "invictus-iitm.appspot.com",
  messagingSenderId: "930865088815",
  appId: "1:930865088815:web:75fdf67da3083014dbf9da",
  measurementId: "G-F3Y9VNL2T5"
};

firebase.initializeApp(firebaseConfig);
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
// const messaging = firebase.messaging();
// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.

const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});