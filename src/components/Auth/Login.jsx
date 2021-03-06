import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";

import { loginUserToFirebase } from "../../controllers/firebaseDB";

const Login = props => {
  const { isAuthed, userLoggedIn } = useContext(AuthContext);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });
  const [validationErrors, setValidationErrors] = useState(false);

  const handleInputChange = e => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (loginInfo.email.length && loginInfo.password.length) {
      loginUserToFirebase(loginInfo.email, loginInfo.password)
        .then(res => {
          if (res.user.uid) {
            userLoggedIn(res.user.uid);
          } else {
            setValidationErrors(
              "Ooops, something went wrong. Please try again in a few minutes."
            );
          }
        })
        .catch(err => {
          setValidationErrors(err.message);
        });
    } else {
      setValidationErrors("Please fill all necessary fields");
    }
  };

  const redirectAuthedUser = () => {
    if (isAuthed) {
      return <Redirect to="/dashboard" />;
    }
  };

  return (
    <div id="bp-loginPage">
      { redirectAuthedUser() }
      <h1>Please Sign In To Your BabyPatrol Account</h1>
      <form className="bp-form-login" onSubmit={handleSubmit}>
        {validationErrors ? (
          <span className="bp-loginErrorMsg">
            <i className="fas fa-exclamation-circle"></i>
            <em> {validationErrors} </em>
          </span>
        ) : null}
        <input
          onChange={handleInputChange}
          id="email"
          className="bp-userInput"
          type="email"
          name="email"
          value={loginInfo.email}
          aria-label="email"
          placeholder="Email"
          min="9"
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
          min="6"
          required
        />
        <input className="bp-form-button" type="submit" value="LOGIN" />
      </form>
    </div>
  );
};

export default Login;
