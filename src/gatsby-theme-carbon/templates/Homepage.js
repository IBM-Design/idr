import React from "react";
import { HomepageCallout } from "gatsby-theme-carbon";
import HomepageHeader from "../../components/HomepageHeader";

// Component to be shadowed
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";

const FirstLeftText = () => <p>What is Design Research?</p>;

const FirstRightText = () => (
  <p>
    Design research is at the heart of Enterprise Design Thinking. If you're not
    practicing design research, you're not working in the Loop. Design research
    helps teams uncover insights and inform the experiences we create for
    people. It turns out good design really is good business. Learn more about
    the business impact of Enterprise Design Thinking in this{" "}
    <a href="https://www.ibm.com/design/thinking/static/media/Enterprise-Design-Thinking-Report.8ab1e9e1.pdf">
      Forrester report
    </a>
    .
  </p>
);

const customProps = {
  Banner: <HomepageHeader />,
  FirstCallout: (
    <HomepageCallout leftText={FirstLeftText} rightText={FirstRightText} />
  ),
  SecondCallout: null
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
