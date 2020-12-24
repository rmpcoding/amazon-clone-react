import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-0d7fEgeeaX5TAf6s2Nu5wgzeDbHbaxY",
    authDomain: "clone-f7b9a.firebaseapp.com",
    projectId: "clone-f7b9a",
    storageBucket: "clone-f7b9a.appspot.com",
    messagingSenderId: "902655806469",
    appId: "1:902655806469:web:6572a1eedf8f09d4b3606c",
    measurementId: "G-6KND6YW6EC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { auth, db, storage } 