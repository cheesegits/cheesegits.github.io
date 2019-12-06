import React from "react";

import ProfilePicture from "../../images/profile-picture-2019.jpg";

import styles from "./aboutMe.module.css";

const Lifestyle = () => (
  <div className={styles.aboutMeContainer}>
    <h3>Lifestyle</h3>
    <img src={ProfilePicture}/>
    <p>
      Current passions and hobbies include ecological and sustainable design,
      healthy food and lifestyle, qualitative over quantitative purchasing decisions, backpacking, and attempting to ice skate and do yoga as well as my wife.
    </p>
  </div>
);

export default Lifestyle;
