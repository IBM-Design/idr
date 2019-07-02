import React from "react";
import ResourceLinks from "gatsby-theme-carbon/src/components/LeftNav/ResourceLinks";

const links = [
  { title: "Medium", href: "https://medium.com/enterprise-design-thinking" },
  {
    title: "W3 Design Research",
    href: "http://idr-prod.w3ibm.mybluemix.net/design/research/resources/"
  }
];

const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
