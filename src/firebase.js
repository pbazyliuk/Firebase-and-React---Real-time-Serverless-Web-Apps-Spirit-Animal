import firebase from 'firebase';

  // Initialize Firebase
 var config = {
    apiKey: "AIzaSyD6cFDFsWzZKNa3LtBy12I7-bSUWUiUFwY",
    authDomain: "social-animals-dad71.firebaseapp.com",
    databaseURL: "https://social-animals-dad71.firebaseio.com",
    projectId: "social-animals-dad71",
    storageBucket: "",
    messagingSenderId: "986439552251"
  };
  firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
