import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyATYA5g7ShVwfVxDs9B23IXw7hN_xH2Hxg",
  authDomain: "babytimes-9476d.firebaseapp.com",
  databaseURL: "https://babytimes-9476d.firebaseio.com",
  projectId: "babytimes-9476d",
  storageBucket: "babytimes-9476d.appspot.com",
  messagingSenderId: "702098493706"
}
// Initialize Cloud firestore through Firebase 
firebase.initializeApp(config);

export default firebase;