import React, { Component } from "react";
import "./auth.css";

import { loginUser } from "../../controllers/firebaseAuth";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitLogin = e => {
    e.preventDefault();
    loginUser(this.state.email, this.state.password);
  };

  render() {
    return (
      <div id="loginPage" className="text-center">
        <form className="form-register">
          <span id="loginImage" role="img" aria-label="baby bottle">
            👶 👶🏽 👶🏻 👶🏾 👶🏼 👶🏿 👶🏽
          </span>
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email
          </label>
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            value={this.state.email}
            className="form-control mt-2"
            placeholder="Email"
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            className="form-control mt-2"
            placeholder="Password"
            required
          />
          <br />
          <button
            onClick={this.submitLogin}
            className="btn btn-lg btn-primary btn-block"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
