import React from "react";

export default class HomepageLightCallout extends React.Component {
  render() {
    return (
      <section className="homepage--callout-gray10">
        <div className="bx--grid">
          <div className="bx--row">
            <aside
              aria-label="header callout"
              className="bx--col-md-3 bx--col-lg-4"
            >
              <h3>Why do it?</h3>
            </aside>
            <div
              className="bx--col-md-4 bx--col-lg-6"
              style={{ marginBottom: `2rem` }}
            >
              <p className="bx--type-expressive-paragraph-01">
                The practice of design research incorporates a rigorous study of
                people and the ecosystems in which they exist. Through the
                practice, teams continuously build understanding and empathy
                through empirical observation, experience, and making.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
