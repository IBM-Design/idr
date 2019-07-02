import React from "react";
import { HomepageCallout } from "gatsby-theme-carbon";
import HomepageHeader from "../../components/HomepageHeader";
import HomepageLightCallout from "../../components/HomepageLightCallout";
import HomepageArticles from "../../components/HomepageArticles";
import homepage_01 from "./images/homepage_01.jpg";
import homepage_02 from "./images/homepage_02.jpg";
import homepage_03 from "./images/homepage_03.jpg";

// Component to be shadowed
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";

const FirstLeftText = () => <p>What is Design Research?</p>;

const FirstRightText = () => (
  <p>
    Design research is at the heart of Enterprise Design Thinking. If you’re not
    practicing design research, you’re not working in the Loop. Design research
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
  SecondCallout: (
    <>
      <HomepageLightCallout />
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
