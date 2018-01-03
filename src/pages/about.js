import React from "react";
import Link from "gatsby-link";

import OptimalWork from "../components/aboutMe/optimalWork";
import Skills from "../components/aboutMe/skills";
import Teamwork from "../components/aboutMe/teamwork";
import Lifestyle from "../components/aboutMe/lifestyle";
const About = () => (
  <div>
    <div>
      <h1 style={{ textAlign: "center", marginBottom: 10, paddingBottom: 10 }}>
        About Me
      </h1>
    </div>
    <Lifestyle />
    <br />
    <Skills />
    <br />
    <Teamwork />
    <br />
    <OptimalWork />
  </div>
);

export default About;
