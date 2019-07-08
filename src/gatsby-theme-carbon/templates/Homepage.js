import React from "react";
import { HomepageCallout } from "gatsby-theme-carbon";
import HomepageHeader from "../../components/HomepageHeader";
import HomepageArticles from "../../components/HomepageArticles";
import homepage_01 from "./images/homepage_01.jpg";
import homepage_02 from "./images/homepage_02.jpg";
import homepage_03 from "./images/homepage_03.jpg";

// Component to be shadowed
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";

const FirstLeftText = () => <p>Our practice</p>;

const FirstRightText = () => (
  <>
    <p>
      Design research helps teams uncover insights to inform the experiences we
      create. It begins with the rigorous study of the people we serve and the
      ecosystems in which they exist. This is the heart of Enterprise Design
      Thinking. While in the Loop, design research leads teams to continuously
      build understanding and empathy through observation, prototyping possible
      solutions, and reflecting on the feedback from our users themselves.
    </p>
    <br />
    <p>
      {" "}
      Learn more about the business impact of Design Research and Enterprise
      Design Thinking in this{" "}
      <a href="https://www.ibm.com/design/thinking/static/media/Enterprise-Design-Thinking-Report.8ab1e9e1.pdf">
        Forrester report
      </a>
      .
    </p>
  </>
);

const customProps = {
  Banner: <HomepageHeader />,
  FirstCallout: (
    <HomepageCallout leftText={FirstLeftText} rightText={FirstRightText} />
  ),
  SecondCallout: (
    <>
      <div
        style={{
          backgroundColor: `#f3f3f3`,
          color: `#242a2e`,
          paddingBottom: `2rem`,
          paddingTop: `4rem`
        }}
      >
        <div className="bx--grid">
          <div className="bx--row">
            <p className="bx--col-md-3 bx--col-lg-4 bx--type-expressive-heading-03">
              Latest Articles
            </p>
          </div>
        </div>
      </div>
      <section className="homepage--articles-gray10">
        <div className="bx--grid">
          <div className="bx--row">
            <HomepageArticles
              title="More than just medicine: how design thinking uncovered modern patient needs"
              author="Enterprise Design Thinking"
              readTime="1 minute read"
              href="https://medium.com/enterprise-design-thinking/more-than-just-medicine-how-design-thinking-uncovered-modern-patient-needs-99063c33d3cb"
              img={homepage_01}
              alt="Baby in a hospital."
            />
            <HomepageArticles
              title="Fun and accuracy: Strike the balance with diverse and empowered team"
              author="Enterprise Design Thinking"
              readTime="3 minute read"
              href="https://medium.com/enterprise-design-thinking/fun-and-accuracy-strike-the-balance-with-a-diverse-and-empowered-team-1b1efaf97a51"
              img={homepage_02}
              alt="Two designers doing some designing."
            />
            <HomepageArticles
              title="Project Monocle: a case for design research"
              author="Enterprise Design Thinking"
              readTime="5 minute read"
              href="https://medium.com/enterprise-design-thinking/project-monocle-a-case-for-design-research-f86a1a08df2e"
              img={homepage_03}
              alt="Two designers intensely examining something important."
            />
          </div>
        </div>
      </section>
    </>
  )
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
