import React from "react";

import styles from "./skills.module.css";

const Skills = () => (
  <div>
    <div className={styles.skillsContainer}>
      <h3>Programming Skills:</h3>
      <div className={styles.skillContainer}>
        <div className={styles.javascriptTitle}>Javascript</div>
        <div className={styles.javascriptPercent}>80%</div>
      </div>
      <div className={styles.skillContainer}>
        <p className={styles.reactTitle}>React + Redux</p>
        <div className={styles.reactPercent}>75%</div>
      </div>
      <div className={styles.skillContainer}>
        <p className={styles.htmlTitle}>HTML5</p>
        <div className={styles.htmlPercent}>80%</div>
      </div>
      <div className={styles.skillContainer}>
        <p className={styles.cssTitle}>CSS3</p>
        <div className={styles.cssPercent}>75%</div>
      </div>
      <br />
      <h3>Experience with:</h3>
      <div>
        <p>
          <i>
            Bootstrap, command line Git, Express, Jquery, Mocha/Chai, MongoDB,
            Mongoose, SocketIO, Webpack
          </i>
        </p>
      </div>
    </div>
  </div>
);

export default Skills;
