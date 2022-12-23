import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA3bmoX0bASSCoT_QyGoAJnum8_35M8f3E",
    authDomain: "eshop--website.firebaseapp.com",
    projectId: "eshop--website",
    storageBucket: "eshop--website.appspot.com",
    messagingSenderId: "766518623024",
    appId: "1:766518623024:web:0a8cea1edbda9ab1a526f5",
    measurementId: "G-4GBD4YTH49"
  };

   const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };
