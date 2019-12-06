import React from "react";

import OptimalWork from "../components/aboutMe/optimalWork";
import Skills from "../components/aboutMe/skills";
import Teamwork from "../components/aboutMe/teamwork";
import Lifestyle from "../components/aboutMe/lifestyle";
import MyMap from "../components/aboutMe/map";

const About = () => ( 
  <div>
    <h1>About Me</h1>
    <Lifestyle/>
    <br/>
    <Skills/>
    <br/>
    <Teamwork/>
    <br/>
    <OptimalWork/>
    <br/>
    <MyMap/>
  </div>
);

export default About;