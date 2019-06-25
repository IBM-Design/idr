import React from "react";
import { HomepageBanner, HomepageCallout } from "gatsby-theme-carbon";

// Component to be shadowed
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";

import Pulse from "../../images/pulse.svg";

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

const BannerText = () => (
  <div className="homepage--header__wrapper">
    <h1 className="homepage--header__title">
      <span>We are not our users.</span>
    </h1>
    <p className="homepage--header__subtitle">
      An authentic focus on people begins with this recognition.
    </p>
  </div>
);

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Pulse} />,
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
