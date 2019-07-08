import React from "react";
import PropTypes from "prop-types";
import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";
import { Link } from "gatsby";

export default class NavTile extends React.Component {
  static propTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  };

  render() {
    const { href, title, description } = this.props;
    return (
      <div class="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 overviewpage--tile-spacing">
        <Link to={href} style={{ color: `black` }}>
          <div class="bx--aspect-ratio bx--aspect-ratio--1x1 overviewpage--tile-border">
            <div class="bx--aspect-ratio--object overviewpage--tile-padding">
              <div class="outside overviewpage--tile-height">
                <div class="inside overviewpage--tile-wrapper">
                  <p className="bx--type-productive-heading-06">{title}</p>
                  <div className="overviewpage--tile-subheader-wrapper">
                    <span className="overviewpage--tile-subheader-text bx--type-body-short-02">
                      {description}
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
    );
  }
}
