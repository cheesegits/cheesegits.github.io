import React from "react";

import styles from "./aboutMe.module.css";

const OptimalWork = () => (
  <div className={styles.aboutMeContainer}>
    <h3>Optimal Employment</h3>
    <p>
      Optimal employment for me (at this stage) would be with a{" "}
      <span style={{ color: "white", fontStyle: "italic" }}>
        temp agency
      </span>{" "}
      that enables me to reflect on many short contracts, or being embraced by a{" "}
      <span style={{ color: "white", fontStyle: "italic" }}>
        longer-term employer
      </span>{" "}
      with a diversity of tasks and/or horizontal job opportunity. Perhaps I am
      naive, but right now I look forward to mastering the Jr. Developer
      position and necessary frameworks more than I look forward to acquiring a
      higher role and paycheck.
    </p>
  </div>
);

export default OptimalWork;
