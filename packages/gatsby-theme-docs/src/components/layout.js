import React from 'react';

const Layout = ({ children }) => (
  <React.Fragment>
    <header>Gatsby</header>
    <main>{children}</main>
  </React.Fragment>
);

export default Layout;
