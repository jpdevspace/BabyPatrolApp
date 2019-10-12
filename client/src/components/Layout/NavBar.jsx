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
    <div class="bp-nav-linksContainer">
      <NavLink className="bp-nav-links" to="/login">
        Login
      </NavLink>
      <NavLink className="bp-nav-links" to="/register">
        Register
      </NavLink>
    </div>
  );

  if (isAuthed) {
    navLinks = (
      <div class="bp-nav-linksContainer">
        <NavLink className="bp-nav-links" to="/dashboard">
          Dashboards
        </NavLink>
        <NavLink className="bp-nav-links" to="/reports">
          Reports
        </NavLink>
        <NavLink className="bp-nav-links" to="/home" onClick={userLoggedOut}>
          Logout
        </NavLink>
      </div>
    );
  }

  return (
    <nav>
      <div>
        <h5 id="bp-nav-babyPatrolText">
          <NavLink to="/">BabyPatrol</NavLink>
        </h5>
      </div>
      {navLinks}
    </nav>
  );
};

export default NavBar;
