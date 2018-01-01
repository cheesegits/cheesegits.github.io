import React from "react";

import familyFarmSite from "../../images/family-farm.png";
import styles from "./projects.module.css";

const Project1 = () => (
  <div className={styles.project}>
    <img src={familyFarmSite} />
    <h3>Family Farm: Receipt Tracker</h3>
    <h4>
      Bootstrap <span style={{ color: "red" }}> |</span> Express{" "}
      <span style={{ color: "red" }}> |</span> Mongoose{" "}
      <span style={{ color: "red" }}> |</span> Chai
    </h4>
    <p>
      Living on a small family farm while attending an online programming
      bootcamp constantly begged the question of how to combine my passion for
      programming and farm life. A receipt tracker for the certified organic
      process became a development priority. Next on the list is a tool to add
      recipes to a family recipes archive.
    </p>
    <h3 style={{ marginBottom: "5px", textAlign: "right" }}>
      {" "}
      <a href="https://shielded-waters-42372.herokuapp.com/">Demo</a> |{" "}
      <a href="https://shielded-waters-42372.herokuapp.com/">Source Code</a>
    </h3>
  </div>
);

export default Project1;
