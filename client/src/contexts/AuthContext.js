import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [ isAuthed, setIsAuthed ] = useState(false);

  const userLoggedIn = uid => {
    console.log("userLoggedIn uid >>>", uid);
    localStorage.setItem("babyPatrolUID", uid);
    setIsAuthed(true);
  }

  const userLoggedOut = () => {
    console.log("userLoggedOut");
    localStorage.removeItem("babyPatrolUID");
    setIsAuthed(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthed, userLoggedIn, userLoggedOut }}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;