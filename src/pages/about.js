import React from "react";
import Link from "gatsby-link";

import OptimalWork from "../components/aboutMe/optimalWork";
import Skills from "../components/aboutMe/skills";
import Teamwork from "../components/aboutMe/teamwork";

const About = () => (
  <div>
    <div style={{ width: 200, margin: "auto" }}>
      <h1>About Me</h1>
    </div>
    <Skills />
    <br />
    <Teamwork />
    <br />
    <OptimalWork />
  </div>
);

export default About;
