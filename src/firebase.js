import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAnfuG582tlKQ604MYWf5G582lMLkn4fA",
    authDomain: "clone-911d4.firebaseapp.com",
    projectId: "clone-911d4",
    storageBucket: "clone-911d4.appspot.com",
    messagingSenderId: "364111428340",
    appId: "1:364111428340:web:2364b4f34607a82ace7ca1",
    measurementId: "G-M7RLQYGSG7"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  export{db,auth};