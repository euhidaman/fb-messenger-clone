import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCPh53LP6sHOF2846Y-V5TRlbRswxrn6kI",
    authDomain: "aman-fbmessenger.firebaseapp.com",
    projectId: "aman-fbmessenger",
    storageBucket: "aman-fbmessenger.appspot.com",
    messagingSenderId: "848365964453",
    appId: "1:848365964453:web:94bf8cbb11e2641d56114c",
    measurementId: "G-H6GWYSN4VQ"
});

const db = firebaseApp.firestore();
export default db;