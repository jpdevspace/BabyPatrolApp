import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import validateInput from "../../controllers/inputValidator";
import "./auth.css";

import { registerUser } from "../../controllers/firebaseDB";

const Register = props => {
  const { isAuthed, userLoggedIn } = useContext(AuthContext);
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    babyName: ""
  });

  const handleInputChange = e => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formValidated = true; // TODO JP: password length, all fields filled, etc...

    if (formValidated) {
      registerUser(
        registerInfo.email,
        registerInfo.password,
        registerInfo.babyName
      )
        .then(uid => userLoggedIn(uid))
        .catch(err => console.error(`Error at registerUser() [Register.jsx]`));
    }
  };

  const redirectAuthedUser = () => {
    if (isAuthed) {
      return <Redirect to="/dashboard" />;
    }
  };

  return (
    <div id="bp-registerPage">
      {redirectAuthedUser()}
      <form className="form-register" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
        <input
          onChange={handleInputChange}
          id="babyName"
          className="bp-userInput"
          type="babyName"
          name="babyName"
          value={registerInfo.babyName}
          placeholder="Baby's Name"
          aria-label="Baby's Name"
          required
          autoFocus
        />
        <spam className="bp-inputMsg">{}</spam>
        <input
          onChange={handleInputChange}
          id="email"
          className="bp-userInput"
          type="email"
          name="email"
          value={registerInfo.email}
          placeholder="Email"
          aria-label="Email"
          required
          autoFocus
        />

        <input
          onChange={handleInputChange}
          id="password"
          className="bp-userInput"
          type="password"
          name="password"
          value={registerInfo.password}
          placeholder="Password"
          aria-label="Password"
          required
        />

        <input
          onChange={handleInputChange}
          id="confirmPassword"
          className="bp-userInput"
          type="password"
          name="confirmPassword"
          value={registerInfo.confirmPassword}
          placeholder="Confirm Password"
          aria-label="Confirm Password"
          required
        />
        <input className="bp-form-button" type="submit" value="REGISTER" />
      </form>
    </div>
  );
};

export default Register;
