import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";

import "./layout.css";

const Layout = props => {
  return (
    <>
      <NavBar />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
