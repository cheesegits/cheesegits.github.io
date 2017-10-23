import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import Navigation from "../components/navigation/navigation";
import styles from "./index.css";

const Header = () => (
  <div>
    <div
      style={{
        background: "#474644",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 3
      }}
    >
      <div
        style={{
          margin: "0 auto",
          display: "inline-block",
          padding: "1rem"
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1
            style={{
              color: "white",
              borderTop: "3px solid red",
              borderLeft: "3px solid red",
              paddingLeft: "10px",
              marginBottom: "0px"
            }}
          >
            Matt Mulit
          </h1>
          <h2
            style={{
              marginBottom: 0,
              color: "#A6BDD4",
              paddingLeft: "10px"
            }}
          >
            {" "}
            Web Developer
          </h2>
        </Link>
      </div>
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
    <div>
      <div className="children">{children()}</div>
    </div>
    <div
      style={{
        display: "block",
        position: "fixed",
        bottom: 0,
        paddingTop: "5px",
        width: "100%",
        background: "#474644",
        zIndex: 2
      }}
    >
      <div
        style={{
          float: "right",
          color: "white",
          marginRight: 10,
          marginBottom: 7,
          borderRight: "1.5px solid red",
          paddingRight: "5px",
          borderBottom: "1.5px solid red",
          paddingBottom: "0px"
        }}
      >
        <h3 style={{ marginBottom: 5 }}>
          Together
          <span
            style={{
              color: "#A6BDD4"
            }}
          >
            {" "}
            We Build
          </span>
        </h3>
      </div>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
