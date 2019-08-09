import React from "react";
import Footer from "gatsby-theme-carbon/src/components/Footer";

const Content = () => (
  <>
    <p>
      Last updated August 2019
      <br />
      Copyright © 2019 IBM
    </p>
  </>
);

const links = {
  firstCol: [
    { href: "https://www.ibm.com/privacy", linkText: "Privacy" },
    { href: "https://www.ibm.com/legal", linkText: "Terms of Use" },
    { href: "https://ibm.com", linkText: "IBM.com" }
  ],
  secondCol: [
    { href: "https://twitter.com/ibmdesign", linkText: "Twitter" },
    {
      href: "https://medium.com/enterprise-design-thinking",
      linkText: "Medium"
    }
  ]
};

const CustomFooter = props => (
  <Footer {...props} links={links} Content={Content} />
);

export default CustomFooter;
