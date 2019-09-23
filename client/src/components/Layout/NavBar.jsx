import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar = props => {
  const { isAuthed, userLoggedIn, userLoggedOut } = useContext(AuthContext);

  // Check if user was loggedIn before
  useEffect(() => {
    console.log("useEffect()");
    const loggedInBefore = localStorage.getItem("babyPatrolUID");

    if (loggedInBefore) {
      userLoggedIn(loggedInBefore);
    } else {
      userLoggedOut();
    }
  }, [isAuthed]);

  let navLinks = (
    <nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  );

  if (isAuthed) {
    navLinks = (
      <nav>
        <NavLink to="/dashboard">Dashboards</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/home" onClick={userLoggedOut}>
          Logout
        </NavLink>
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
    </div>
  );
};

export default NavBar;
