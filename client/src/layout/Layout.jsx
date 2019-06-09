import React from 'react';

import Footer from './Footer';
import NavBar from './NavBar';

const Layout = (props) => {
  return (
    <div>
      <NavBar />
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;