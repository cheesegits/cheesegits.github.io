import React from "react";
import Link from "gatsby-link";

import ReceiptTracker from "../components/projects/receiptTracker";
import QAndAExtension from "../components/projects/qAndAExtension";
import MongoShopping from "../components/projects/mongoShopping";

const Projects = () => (
  <div>
    {/* <div>
      <h1 style={{ textAlign: "center", marginBottom: 10, paddingBottom: 10 }}>
        Projects
      </h1>
    </div> */}
    <ReceiptTracker />
    <QAndAExtension />
    <MongoShopping />
  </div>
);

export default Projects;
