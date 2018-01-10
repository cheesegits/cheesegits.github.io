import React from "react";

import WeddingPicture from "../../images/wedding.jpg";

import styles from "./aboutMe.module.css";

const Lifestyle = () => (
  <div className={styles.aboutMeContainer}>
    <h3>Lifestyle</h3>
    <p>As of December 24th, 2017, I am a proudly married man.</p>
    <img src={WeddingPicture} style={{ borderRadius: "20px" }} />
    <p>
      Current hobbies and passions include ecological and sustainable design,
      healthy food and lifestyle, home furnishing and interior design, the game
      of Chess, and of course, Amazon Priming and YouTubing EVERYTHING.
    </p>
  </div>
);

export default Lifestyle;
