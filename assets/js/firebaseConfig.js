if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (error) => {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}

// For Firebase JS SDK v8.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA40TK679BAIycNQEiOYK7NIrqnAy1mJCg",
    authDomain: "event-booking-app-c9a46.firebaseapp.com",
    projectId: "event-booking-app-c9a46",
    storageBucket: "event-booking-app-c9a46.appspot.com",
    messagingSenderId: "152622973496",
    appId: "1:152622973496:web:e170f85f577daf9c7d5ccd",
    measurementId: "G-8M9K1SVWLS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make auth and firestore references
const auth = firebase.auth();

