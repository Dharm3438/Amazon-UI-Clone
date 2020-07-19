import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAFQ48xL8FuILKNzPsRuyyOPIkRW0s8QMg",
  authDomain: "cl-eb715.firebaseapp.com",
  databaseURL: "https://cl-eb715.firebaseio.com",
  projectId: "cl-eb715",
  storageBucket: "cl-eb715.appspot.com",
  messagingSenderId: "152883250316",
  appId: "1:152883250316:web:103f9303711810b310e7a9",
});

const db = firebase.firestore();

const auth = firebase.auth();

export { auth };
