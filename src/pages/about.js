import React from "react";
import Link from "gatsby-link";

import Skills from "../components/skills/skills";

const About = () => (
  <div>
    <div styles={{ width: 300, margin: "auto" }}>
      <h1>About Me</h1>
    </div>
    <Skills />
  </div>
);

export default About;
