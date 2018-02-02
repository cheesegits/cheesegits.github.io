import React from "react";

import styles from "./aboutMe.module.css";

const Skills = () => (
  <div>
    <div className={styles.aboutMeContainer}>
      <h3>Programming Skills</h3>
      <div className={styles.skillContainer}>
        <div className={styles.javascriptTitle}>Javascript</div>
      </div>
      <div className={styles.skillContainer}>
        <p className={styles.reactTitle}>React + Redux</p>
      </div>
      <div className={styles.skillContainer}>
        <p className={styles.htmlTitle}>HTML5</p>
      </div>
      <div className={styles.skillContainer}>
        <p className={styles.cssTitle}>CSS3</p>
      </div>
      <br />
      <h3
        style={{
          borderLeft: "none",
          borderTop: "none",
          marginTop: "5px",
          marginBottom: "10px",
          fontStyle: "italic"
        }}
      >
        Experience with:
      </h3>
      <div>
        <h4 style={{ color: "white" }}>
          Bootstrap <span style={{ color: "red" }}>|</span> command line Git{" "}
          <span style={{ color: "red" }}>|</span> Express{" "}
          <span style={{ color: "red" }}>|</span> Jquery{" "}
          <span style={{ color: "red" }}>|</span> Mocha/Chai{" "}
          <span style={{ color: "red" }}>|</span> MongoDB{" "}
          <span style={{ color: "red" }}>|</span> Mongoose{" "}
          <span style={{ color: "red" }}>|</span> SocketIO{" "}
          <span style={{ color: "red" }}>|</span> Webpack
        </h4>
      </div>
    </div>
  </div>
);

export default Skills;
