import React, { Component } from 'react';
import './auth.css';

import { registerUser } from '../controllers/firebaseAuth';

class Register extends Component {
  state = {
    babyName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitRegister = (e) => {
    e.preventDefault();
    registerUser(this.state.email, this.state.password)
  }
  
  render() {
    return (
      <div id="registerPage" className="text-center">
        <form className="form-register">
          <span id="registerImage" role="img" aria-label="baby bottle">
            👶 👶🏽 👶🏻 👶🏾 👶🏼 👶🏿 👶🏽
          </span>
          <h1 className="h3 mb-3 font-weight-normal">Register</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email
          </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="babyName"
            value={this.state.babyName}
            className="form-control"
            placeholder="Baby's Name"
          />
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
          <label htmlFor="inputPassword2" className="sr-only">
            Confirm Password
          </label>
          <input
            onChange={this.handleChange}
            type="password"
            name="confirmPassword"
            value = { this.state.confirmPassword }
            className="form-control mt-2"
            placeholder="Confirm Password"
            required
          />
          <br />
          <button
            onClick={this.submitRegister}
            className="btn btn-lg btn-primary btn-block"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    );
  }
};

export default Register;