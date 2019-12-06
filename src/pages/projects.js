import React from "react";

import ReceiptTracker from "../components/projects/receiptTracker";
import QAndAExtension from "../components/projects/qAndAExtension";
import MongoShopping from "../components/projects/mongoShopping";

const Projects = () => ( 
  <div>
    <h1>Projects</h1>
    <ReceiptTracker/>
    <QAndAExtension/>
    <MongoShopping/>
  </div>
);

export default Projects;