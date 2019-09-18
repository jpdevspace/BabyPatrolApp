import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar = props => {
  const { isAuthed } = AuthContext;
  let navLinks = (
    <nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  );

  if (isAuthed) {
    navLinks = (
      <nav>
        <NavLink to="/dashboard">Reports</NavLink>
        <NavLink to="/reports">Reports</NavLink>
      </nav>
    );
  }

  return (
    <div>
      <div>
        <h5>
          <NavLink to="/">BabyPatrol</NavLink>
        </h5>
      </div>
      {navLinks}
      {/* <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/reports">Reports</NavLink>
      </nav> */}
    </div>
  );
};

export default NavBar;
