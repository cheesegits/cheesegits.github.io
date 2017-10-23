import React, { Component } from "react";
import Link from "gatsby-link";
import styles from "./navigation.module.css";

class NavigationMenu extends Component {
  render() {
    return (
      <div className={styles.overlay}>
        <a
          href="javascript:void(0)"
          className={styles.closeBtn}
          onClick={this.onClick}
        >
          &times;
        </a>
        <div className={styles.pageLinks}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/about" className={styles.link}>
            About Me
          </Link>
          <Link to="/projects" className={styles.link}>
            Projects
          </Link>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

class NavigationButton extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
  }
  onClick() {
    this.setState({ showMenu: !this.state.showMenu });
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          display: "inline-block",
          float: "right",
          padding: ".9rem",
          top: 0,
          right: 0,
          zIndex: 3
        }}
        onClick={() => this.onClick()}
      >
        <button style={{ backgroundColor: "#292E31" }}>
          <div className={styles.navBar1} />
          <div className={styles.navBar2} />
          <div className={styles.navBar3} />
        </button>
        {this.state.showMenu ? <NavigationMenu /> : null}
      </div>
    );
  }
}

export default NavigationButton;
