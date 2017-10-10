import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import Navigation from "../components/navigation/navigation";
import "./index.css";

const Header = () => (
  <div
    style={{
      background: "#474644",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        display: "inline-block",
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Matt Mulit
        </Link>
      </h1>
      <h2 style={{ marginBottom: 0, color: "#A6BDD4" }}> Web Developer</h2>
    </div>
    <Navigation />
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Matt Mulit (cheesegits)"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
    <div style={{ position: "fixed", bottom: 0, right: 30 }}>
      <h3 style={{ color: "white", marginBottom: 5 }}>Together</h3>
      <h3 style={{ color: "#A6BDD4" }}>We Build</h3>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
