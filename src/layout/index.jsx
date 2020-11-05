import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Navbar />

        {/* <div className="row"> */}
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
          <link
            href="https://fonts.googleapis.com/css2?family=Epilogue:wght@700&family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        {children}
        {/* </div> */}
        <Footer config={config} />
      </div>
    );
  }
}
