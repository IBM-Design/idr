import React from "react";
import { HomepageCallout } from "gatsby-theme-carbon";
import HomepageVideo from "../../components/HomepageVideo";
import HomepageArticles from "../../components/HomepageArticles";
import homepage_01 from "./images/homepage_01.png";
import homepage_02 from "./images/homepage_02.png";
import homepage_03 from "./images/homepage_03.png";

// Component to be shadowed
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";

const FirstLeftText = () => (
  <p className="bx--type-expressive-heading-03">Our practice</p>
);

const FirstRightText = () => (
  <>
    <p>
      {" "}
      <span className="semibold">We are not our users.</span> Design research
      guides teams to uncover insights and inform the experiences we create. It
      begins with the rigorous study of the people we serve and their context.
      This is the heart of{" "}
      <a
        href="https://ibm.com/design/thinking"
        target="_blank"
        rel="noopener noreferrer"
      >
        Enterprise Design Thinking
      </a>
      . While in the{" "}
      <a
        href="https://www.ibm.com/design/thinking/page/framework/loop"
        target="_blank"
        rel="noopener noreferrer"
      >
        Loop
      </a>
      , design research leads teams to continuously build understanding and
      empathy through observation, prototyping possible solutions, and
      reflecting on the feedback from our users themselves.
    </p>
    <br />
  </>
);

const customProps = {
  Banner: <HomepageVideo src="hero.mp4" poster="hero.png" />,
  FirstCallout: (
    <HomepageCallout leftText={FirstLeftText} rightText={FirstRightText} />
  ),
  SecondCallout: (
    <>
      <div
        style={{
          backgroundColor: `#171717`,
          color: `#FFFFFF`,
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
      <section className="homepage--articles-black100">
        <div className="bx--grid">
          <div className="bx--row">
            <HomepageArticles
              title="More than just medicine: how design thinking uncovered modern patient needs"
              author="Enterprise Design Thinking"
              readTime="1 minute read"
              href="https://medium.com/enterprise-design-thinking/more-than-just-medicine-how-design-thinking-uncovered-modern-patient-needs-99063c33d3cb"
              img={homepage_01}
              color="dark"
              alt="Baby in a hospital."
            />
            <HomepageArticles
              title="The Total Economic
              Impact™ Of IBM’s Design
              Thinking Practice"
              author="Forrester"
              readTime="60 minute read"
              href="https://www.ibm.com/design/thinking/static/media/Enterprise-Design-Thinking-Report.8ab1e9e1.pdf"
              img={homepage_02}
              color="dark"
              alt="Two designers doing some designing."
            />
            <HomepageArticles
              title="Project Monocle: a case for design research"
              author="Enterprise Design Thinking"
              readTime="5 minute read"
              href="https://medium.com/enterprise-design-thinking/project-monocle-a-case-for-design-research-f86a1a08df2e"
              img={homepage_03}
              color="dark"
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
