import React from "react";
import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";
import { Link } from "gatsby";

export default class HomepageNavTile extends React.Component {
  render() {
    return (
      <div className="homepage--callout--tiles">
        <section className="bx--row bx--no-gutter">
          <div class="bx--col-sm-4 bx--col-md-4 bx--col-lg-4">
            <Link to="/guiding-principles/principles-overview">
              <div class="bx--aspect-ratio bx--aspect-ratio--1x1 homepage--tile-border">
                <div class="bx--aspect-ratio--object homepage--tile-padding">
                  <div class="outside homepage--tile-height">
                    <div class="inside homepage--tile-wrapper">
                      <p>
                        Guiding
                        <br /> principles
                      </p>
                      <div className="homepage--tile-subheader-wrapper">
                        <span className="homepage--tile-subheader-text bx--type-body-short-02">
                          A foundation for great experiences{" "}
                        </span>
                        <span>
                          <ArrowRight20 aria-label="read more" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="bx--col-sm-4 bx--col-md-4 bx--col-lg-4">
            <Link to="/research-in-practice/practice-overview">
              <div class="bx--aspect-ratio bx--aspect-ratio--1x1 homepage--tile-border">
                <div class="bx--aspect-ratio--object homepage--tile-padding">
                  <div class="outside homepage--tile-height">
                    <div class="inside homepage--tile-wrapper">
                      <p className="bx--type-productive-heading-07">
                        Research in
                        <br /> practice
                      </p>
                      <div className="homepage--tile-subheader-wrapper">
                        <span className="homepage--tile-subheader-text bx--type-body-short-02">
                          Establish a shared vocabulary{" "}
                        </span>
                        <span>
                          <ArrowRight20 aria-label="read more" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="bx--col-sm-4 bx--col-md-4 bx--col-lg-4">
            <Link to="/ethics">
              <div class="bx--aspect-ratio bx--aspect-ratio--1x1 homepage--tile-border">
                <div class="bx--aspect-ratio--object homepage--tile-padding">
                  <div class="outside homepage--tile-height">
                    <div class="inside homepage--tile-wrapper">
                      <p className="bx--type-productive-heading-07">
                        Ethics &amp;
                        <br /> responsibilities
                      </p>
                      <div className="homepage--tile-subheader-wrapper">
                        <span className="homepage--tile-subheader-text bx--type-body-short-02">
                          The design research code of conduct{" "}
                        </span>
                        <span>
                          <ArrowRight20 aria-label="read more" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}
