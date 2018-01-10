import React from "react";

import styles from "./aboutMe.module.css";

const MyMap = () => (
  <div className={styles.aboutMeContainer}>
    <h3>Location</h3>
    <h4 style={{ color: "white", marginBottom: "5px", textAlign: "center" }}>
      Local Employers:
    </h4>
    <p style={{ marginBottom: "5px", textAlign: "center" }}>
      21 miles to NYC (55 minute train)
    </p>
    <p style={{ textAlign: "center" }}>
      6 miles to Morristown (12 minute train)
    </p>
    <iframe
      className={styles.googleMap}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96801.45188945495!2d-74.2116936667988!3d40.69499838476873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a5624c073379%3A0xb7f7cf111207ef23!2sChatham+Township%2C+NJ+07928!5e0!3m2!1sen!2sus!4v1515601109499z=15"
      frameborder="0"
      allowfullscreen
    />
    <h4 style={{ color: "white", marginBottom: "5px", textAlign: "center" }}>
      Long-distance Employers:
    </h4>
    <p style={{ marginBottom: "5px", textAlign: "center" }}>
      200 Mbps Fiber-to-the-Home
    </p>
    <p style={{ marginBottom: "5px", textAlign: "center" }}>
      Tier 1 Hotspot, unlimited data
    </p>
    <p style={{ textAlign: "center" }}>
      11 miles to Newark International Airport
    </p>
  </div>
);

export default MyMap;
