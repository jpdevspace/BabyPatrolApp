import React, { createContext, useState } from "react";
import { logoutUserFromFirebase } from "../controllers/firebaseDB";
import firebase from "../config/firebaseConfig";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [ isAuthed, setIsAuthed ] = useState(false);

  const userLoggedIn = uid => {
    localStorage.setItem("babyPatrolUID", uid);
    setIsAuthed(true);
  }

  const userLoggedOut = () => {
    localStorage.removeItem("babyPatrolUID");
    setIsAuthed(false); // Update context
    logoutUserFromFirebase(); // Update Firebase

  }

  //Auth State Observer
  firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //
    // } else {

    // }
  });

  return (
    <AuthContext.Provider value={{ isAuthed, userLoggedIn, userLoggedOut }}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;