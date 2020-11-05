import React, { Component } from "react";
import { Link } from "gatsby";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    // const { config } = this.props;
    // const url = config.siteRss;
    // const { copyright } = config;
    // if (!copyright) {
    //   return null;
    // }
    return (
      <>
        <nav className="navbar mb-xl">
          <div className="navbar__content row">
            <div>
              <h3 className="label">Riccardo Buzzotta</h3>
              <p className="body-xs">
                Product Designer with a focus on Product Managent.
              </p>
            </div>

            <div className="navbar__menu">
              <Link to="/" className="nav__link label">
                {/* <Link to="/" className=""> */}
                Home
              </Link>
              <Link to="/about" className="nav__link label">
                About
              </Link>
              <Link to="/blog" className="nav__link label">
                Blog
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
