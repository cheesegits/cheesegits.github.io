import React from "react";
import Link from "gatsby-link";
import EmailIcon from "../images/email-icon.png";
import GithubIcon from "../images/Github-icon.png";
import LinkedinIcon from "../images/Linkedin-icon.png";

const Contact = () => (
  <div>
    <h1 style={{ textAlign: "center", marginBottom: 10, paddingBottom: 10 }}>
      Contact Info
    </h1>
    <div
      style={{
        backgroundColor: "#292e31",
        opacity: "0.85",
        borderRadius: "20px",
        margin: "auto",
        width: "100%",
        padding: "15px",
        textAlign: "center",
        color: "#a6bdd4"
      }}
    >
      <div>
        <img
          src={EmailIcon}
          style={{ width: "48px", float: "left", marginBottom: "0px" }}
        />
        <h3
          style={{
            display: "inline-block",
            marginTop: "10px"
          }}
        >
          <a href="cheesegits@gmail.com" style={{ color: "#77864f" }}>
            cheesegits@gmail.com
          </a>
        </h3>
      </div>
      <div style={{ clear: "left" }}>
        <img
          src={GithubIcon}
          style={{ width: "48px", float: "left", marginBottom: "0px" }}
        />
        <h3 style={{ display: "inline-block", marginTop: "10px" }}>
          <a href="https://github.com/cheesegits" style={{ color: "white" }}>
            GitHub: cheesegits
          </a>
        </h3>
      </div>
      <div style={{ clear: "left" }}>
        <img
          src={LinkedinIcon}
          style={{ width: "48px", float: "left", marginBottom: "0px" }}
        />
        <h3 style={{ display: "inline-block", marginTop: "10px" }}>
          <a
            href="https://www.linkedin.com/in/matthew-mulit-902981125/"
            style={{ color: "#A6BDD4" }}
          >
            Linked-In Profile
          </a>
        </h3>
      </div>
    </div>
  </div>
);

export default Contact;
