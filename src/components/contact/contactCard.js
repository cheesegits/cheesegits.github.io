import React from "react";

import Email from "./email";
import Github from "./github";
import Linkedin from "./linkedIn";

import styles from "./contact.module.css";

const ContactCard = () => (
    <div className={styles.contactContainer}>
        <Email />
        <Github />
        <Linkedin />
    </div>
);

export default ContactCard;