import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv63ec8-duMtZPjeKIwA4iLtiwg9jmx0s",
  authDomain: "linkedin-clone-da041.firebaseapp.com",
  projectId: "linkedin-clone-da041",
  storageBucket: "linkedin-clone-da041.appspot.com",
  messagingSenderId: "85951848164",
  appId: "1:85951848164:web:9eb18ae8314cabe43856f1",
  measurementId: "G-782XGE0XV0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
