import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div>
    <div
      style={{
        backgroundColor: "#292E31",
        opacity: 0.85,
        borderRadius: 20,
        margin: "auto",
        width: 350,
        padding: 15,
        textAlign: "center"
      }}
    >
      <h4 style={{ color: "#77864F", marginBottom: 5 }}>
        Inspired by the world
      </h4>
      <h4 style={{ color: "white", marginBottom: 5 }}>
        Possible through community
      </h4>
      <h4 style={{ color: "#A6BDD4", marginBottom: 5 }}>
        A permanence greather than self
      </h4>
    </div>
    <div style={{ position: "fixed", bottom: 0, right: 30 }}>
      <h3 style={{ color: "white", marginBottom: 5 }}>Together</h3>
      <h3 style={{ color: "#A6BDD4" }}>We Build</h3>
    </div>
  </div>
);

export default IndexPage;
