import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGJcHHhNv3z06hmzWm2gHR-gMPfw6sL7w",
    authDomain: "clone-6d9af.firebaseapp.com",
    projectId: "clone-6d9af",
    storageBucket: "clone-6d9af.appspot.com",
    messagingSenderId: "916552599337",
    appId: "1:916552599337:web:a8b91ee4af6926652e1938",
    measurementId: "G-JMWYWF6TZ7",
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db, auth};