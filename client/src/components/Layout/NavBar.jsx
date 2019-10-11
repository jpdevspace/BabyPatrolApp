import React, { Fragment, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar = props => {
  const { isAuthed, userLoggedIn, userLoggedOut } = useContext(AuthContext);

  // Check if user was loggedIn before
  useEffect(() => {
    const loggedInBefore = localStorage.getItem("babyPatrolUID");

    if (loggedInBefore) {
      userLoggedIn(loggedInBefore);
    } else {
      userLoggedOut();
    }
  }, [isAuthed]);

  let navLinks = (
    <Fragment>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </Fragment>
  );

  if (isAuthed) {
    navLinks = (
      <Fragment>
        <NavLink to="/dashboard">Dashboards</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/home" onClick={userLoggedOut}>
          Logout
        </NavLink>
      </Fragment>
    );
  }

  return (
    <nav>
      <div id="bp-nav-logo-container">
        <h5>
          <NavLink to="/">BabyPatrol</NavLink>
        </h5>
      </div>
      {navLinks}
    </nav>
  );
};

export default NavBar;
