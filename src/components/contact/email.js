import React from "react";

import EmailIcon from "../../images/email-icon.png";

import styles from "./contact.module.css";

const Email = () => (
    <div className={styles.emailContainer}>
        <a href="mailto:cheesegits@gmail.com">
            <img src={EmailIcon} />
            <h3>cheesegits@gmail.com</h3>
        </a>
    </div>
);

export default Email;