import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import { validateMinLength, pwdMatch } from "../../controllers/inputValidator";
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
  const [validationErrors, setValidationErrors] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    babyName: false
  });

  const handleInputChange = e => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const validEmail = validateMinLength(registerInfo.email, 9);
    const validPwdLength = validateMinLength(registerInfo.password, 6);
    const validPwdMatch = pwdMatch(
      registerInfo.password,
      registerInfo.confirmPassword
    );

    if (validEmail && validPwdLength && validPwdMatch) {
      console.log("Valid");
      registerUser(
        registerInfo.email,
        registerInfo.password,
        registerInfo.babyName
      )
        .then(uid => userLoggedIn(uid))
        .catch(err => console.error(`Error at registerUser() [Register.jsx]`));
    } else {
      setValidationErrors({
        email: validEmail ? false : "Your email looks too short.",
        password: validPwdLength
          ? false
          : "Your password needs to be at least 6 characters long.",
        confirmPassword: validPwdMatch ? false : "Passwords do not match."
      });
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
        />
        {validationErrors.email ? (
          <span className="bp-inputMsg">
            <i class="fas fa-exclamation-circle"></i>
            <em> {validationErrors.email} </em>
          </span>
        ) : null}

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
          //minLength="6"
        />
        {validationErrors.password ? (
          <span className="bp-inputMsg">
            <i class="fas fa-exclamation-circle"></i>
            <em> {validationErrors.password} </em>
          </span>
        ) : null}

        <input
          onChange={handleInputChange}
          id="confirmPassword"
          className="bp-userInput"
          type="password"
          name="confirmPassword"
          value={registerInfo.confirmPassword}
          placeholder="Confirm Password"
          aria-label="Confirm Password"
          //minLength="6"
          required
        />
        {validationErrors.confirmPassword ? (
          <span className="bp-inputMsg">
            <i class="fas fa-exclamation-circle"></i>
            <em> {validationErrors.confirmPassword} </em>
          </span>
        ) : null}

        <input className="bp-form-button" type="submit" value="REGISTER" />
      </form>
    </div>
  );
};

export default Register;
