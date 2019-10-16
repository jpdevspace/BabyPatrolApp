import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import "./auth.css";

import { loginUserToFirebase } from "../../controllers/firebaseDB";

const Login = props => {
  const { isAuthed, userLoggedIn } = useContext(AuthContext);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = e => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formValidated = true; // TODO JP: password length, all fields filled, etc...

    if (formValidated) {
      loginUserToFirebase(loginInfo.email, loginInfo.password)
        .then(res => userLoggedIn(res.user.uid))
        .catch(err => console.error(`Error at registerUser() [Register.jsx]`));
    }
  };

  const redirectAuthedUser = () => {
    if (isAuthed) {
      return <Redirect to="/dashboard" />;
    }
  };

  return (
    <div id="bp-loginPage">
      {redirectAuthedUser()}
      <form className="bp-form-login" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          onChange={handleInputChange}
          id="email"
          className="bp-userInput"
          type="email"
          name="email"
          value={loginInfo.email}
          aria-label="email"
          placeholder="Email"
          required
          autoFocus
        />
        <input
          onChange={handleInputChange}
          id="password"
          className="bp-userInput"
          type="password"
          name="password"
          value={loginInfo.password}
          aria-label="password"
          placeholder="Password"
          required
        />

        <input className="bp-form-button" type="submit" value="LOGIN" />
      </form>
    </div>
  );
};

export default Login;
