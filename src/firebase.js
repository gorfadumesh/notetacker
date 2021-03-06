import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD1yMkSI4SyNJGTokJC4GRM4zJN4YzQIGU",
  authDomain: "advance-classroom.firebaseapp.com",
  projectId: "advance-classroom",
  storageBucket: "advance-classroom.appspot.com",
  messagingSenderId: "144994040615",
  appId: "1:144994040615:web:6d9cf85ad286de9a95c702",
  measurementId: "G-R6SYLNM7BB",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
