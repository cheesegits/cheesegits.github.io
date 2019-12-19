import React from "react";

import LinkedinIcon from "../../images/Linkedin-icon.png";

import styles from "./contact.module.css";

const Linkedin = () => (
    <div className={styles.linkedinContainer}>
        <a href ="https://www.linkedin.com/in/matthew-mulit-902981125/">
            <img src={LinkedinIcon} />
            <h3>Linked-In Profile</h3>
        </a>
    </div>
);

export default Linkedin;