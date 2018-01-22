import React from "react";

import shoppingList from "../../images/shopping-list.png";

import styles from "./projects.module.css";

const Project5 = () => (
  <div className={styles.project}>
    <img src={shoppingList} />
    <h3>Mongo Shopping List</h3>
    <h4>
      Javascript <span style={{ color: "red" }}> |</span> Express{" "}
      <span style={{ color: "red" }}> |</span> Mongoose{" "}
      <span style={{ color: "red" }}> |</span> Travis{" "}
      <span style={{ color: "red" }}> |</span> Chai
    </h4>
    <p>
      The frontend for this shopping list was provided by the Thinkful
      programming bootcamp. Business logic was added to provide shopping list
      functionality. Continuous integration was added via Travis for additional
      development in the future.
    </p>
    <h3 style={{ textAlign: "right" }}>
      <a href="https://mm-shopping-list.herokuapp.com/">Demo</a> |{" "}
      <a href="https://github.com/cheesegits/mongo-shopping-list">
        Source Code
      </a>
    </h3>
  </div>
);

export default Project5;
