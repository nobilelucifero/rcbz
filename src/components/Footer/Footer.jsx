import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <div className="row">
          <p>{copyright}</p>
          <UserLinks config={config} labeled />

          {/* <Link to={url}>
            <button>Subscribe</button>
          </Link> */}
          {/* <h4>
            Based on{" "}
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>
            . */}
          {/* </h4> */}
        </div>
      </footer>
    );
  }
}

export default Footer;
