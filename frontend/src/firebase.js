import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHs7shC_TMZJ31CiTV3CCy7WTJpVu5THg",
  authDomain: "shubhshagun-90d37.firebaseapp.com",
  projectId: "shubhshagun-90d37",
  storageBucket: "shubhshagun-90d37.appspot.com",
  messagingSenderId: "282955271222",
  appId: "1:282955271222:web:93809d6b2948f2a55e1c97",
  measurementId: "G-NZ0THGFNKC"
};

const firebaseApp = firebase.initializeApp (firebaseConfig);
const db = firebaseApp.firestore();

export default db;