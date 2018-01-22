import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import Navigation from "../components/navigation/navigation";
import styles from "./index.css";

const Header = () => (
  <div>
    <div
      className="siteHeader"
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
          display: "inline-block",
          marginTop: "6px",
          marginLeft: "6px",
          marginBottom: "10px",
          borderLeft: "3px solid red",
          borderTop: "3px solid red"
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1
            style={{
              color: "white",
              paddingLeft: "6px",
              marginBottom: "0px"
            }}
          >
            Matt Mulit
          </h1>
          <h2
            style={{
              marginBottom: 0,
              color: "#A6BDD4",
              paddingLeft: "6px"
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
        {
          name: "description",
          content:
            "The professional site of Matt Mulit - Web Developer.  Currently available for hire."
        },
        {
          name: "keywords",
          content: "Matt, Mulit, Web, App, Developer, JavaScript, React"
        }
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
          marginRight: 6,
          marginBottom: 6,
          borderRight: "1.5px solid red",
          paddingRight: "5px",
          borderBottom: "1.5px solid red",
          paddingBottom: "0px"
        }}
      >
        <h3 style={{ marginBottom: 5, fontFamily: "Rock Salt" }}>
          Together
          <span
            style={{
              color: "#A6BDD4",
              fontFamily: "Bungee Hairline"
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
