import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzdg8pNdcDGY-TD1TNe0x_z4Qk3lFdbxo",
    authDomain: "ui-reel-2b08d.firebaseapp.com",
    projectId: "ui-reel-2b08d",
    storageBucket: "ui-reel-2b08d.appspot.com",
    messagingSenderId: "909890353192",
    appId: "1:909890353192:web:f584a48a750dd3840f9d1d",
    measurementId: "G-98NQX6WHG0"
  };

const firebaseApp = firebase.initializeApp (firebaseConfig);
const db = firebaseApp.firestore();

export default db;