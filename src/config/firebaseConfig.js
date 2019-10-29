import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { keys } from './firebaseKey';

// Initialize Firebase
const config = {
  apiKey: keys.firebase,
  authDomain: "babytimes-9476d.firebaseapp.com",
  databaseURL: "https://babytimes-9476d.firebaseio.com",
  projectId: "babytimes-9476d",
  storageBucket: "babytimes-9476d.appspot.com",
  messagingSenderId: "702098493706"
}
// Initialize Cloud firestore through Firebase 
firebase.initializeApp(config);

export default firebase;