/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
//import $ from "jquery";

//import "popper.js"; // bootstrap js dependency
//import "bootstrap"; // bootstrap js
//import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div>TOP</div>
      <div className="container-fluid">{children}</div>
      <div style={{ marginBottom: "20px" }}>BOTTOM</div>
      <footer>
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
