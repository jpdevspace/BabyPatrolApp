import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import "./auth.css";

import { loginUser } from "../../controllers/firebaseDB";

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
      loginUser(loginInfo.email, loginInfo.password)
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
    <div id="loginPage">
      <span id="loginImage" role="img" aria-label="baby bottle">
        👶 👶🏽 👶🏻 👶🏾 👶🏼 👶🏿 👶🏽
      </span>
      {redirectAuthedUser()}
      <form className="form-login" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          onChange={handleInputChange}
          id="email"
          type="email"
          name="email"
          value={loginInfo.email}
          placeholder="Email"
          required
          autoFocus
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          onChange={handleInputChange}
          id="password"
          type="password"
          name="password"
          value={loginInfo.password}
          placeholder="Password"
          required
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
