import React from "react";

import qAndAExtension from "../../images/QandAExtension.png";

import styles from "./projects.module.css";

const Project2 = () => (
  <div className={styles.project}>
    <img src={qAndAExtension} />
    <h3>Thinkful Q&A Chrome Extension</h3>
    <h4>
      Chrome <span style={{ color: "red" }}> |</span> Thinkful API{" "}
      <span style={{ color: "red" }}> |</span> Javascript{" "}
      <span style={{ color: "red" }}> |</span> moment.js{" "}
    </h4>
    <p>
      While working through the Thinkful bootcamp curriculum I wanted a more
      efficient way of monitoring when mentors were available for questions.
      This Chrome extension made the Q&A Sessions information only a single
      click away. Because the API requires Thinkful account login to work, a
      demonstration model is not available.
    </p>
    <h3 style={{ textAlign: "right" }}>
      <a href="ThinkfulQAExtension">Source Code</a>
    </h3>
  </div>
);

export default Project2;
