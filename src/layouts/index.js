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
      marginBottom: "1.45rem",
      position: "fixed",
      width: "100%",
      zIndex: 2
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
            textDecoration: "none",
            borderTop: "3px solid red",
            borderLeft: "3px solid red",
            paddingLeft: "10px"
          }}
        >
          Matt Mulit
        </Link>
      </h1>
      <h2
        style={{
          marginBottom: 0,
          color: "#A6BDD4",
          paddingLeft: "10px",
          borderLeft: "3px solid red"
        }}
      >
        {" "}
        Web Developer
      </h2>
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
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        marginTop: 150,
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        zIndex: 1
      }}
    >
      {children()}
    </div>
    <div style={{ position: "fixed", bottom: 0, right: 30 }}>
      <h3
        style={{
          color: "white",
          marginBottom: 0,
          borderRight: "3px solid red",
          paddingRight: "10px"
        }}
      >
        Together
      </h3>
      <h3
        style={{
          color: "#A6BDD4",
          borderBottom: "3px solid red",
          paddingBottom: "10px",
          borderRight: "3px solid red",
          paddingBottom: "10px"
        }}
      >
        We Build
      </h3>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
