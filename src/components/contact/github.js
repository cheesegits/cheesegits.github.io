import React from "react";

import GithubIcon from "../../images/Github-icon.png";

import styles from "./contact.module.css";

const Email = () => (
    <div className={styles.githubContainer}>
        <a href="https://github.com/cheesegits">
            <img src={GithubIcon} />
            <h3 id='email'>Github: cheesegits</h3>
        </a>
    </div>
);

export default Email;