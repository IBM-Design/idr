import React from "react";

export default class HomepageHeader extends React.Component {
  render() {
    // Banner image
    const bannerImg = (
      <svg
        width="994"
        height="986"
        viewBox="0 0 994 986"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <ellipse id="path-1" cx="496" cy="492" rx="496" ry="492" />
          <mask id="mask-2" x="0" y="0" width="992" height="984" fill="#fff">
            <use xlinkHref="#path-1" />
          </mask>
        </defs>
        <g id="Pulse" fill="none" fillRule="evenodd">
          <g id="Group" transform="translate(1 1)">
            <ellipse
              id="Oval-10"
              fill="#FFA0C2"
              opacity="0.2"
              cx="493.5"
              cy="493"
              rx="267.5"
              ry="265"
            />
            <path
              d="M494.5,788 C658.804713,788 792,655.700144 792,492.5 C792,329.299856 658.804713,197 494.5,197 C330.195287,197 197,329.299856 197,492.5 C197,655.700144 330.195287,788 494.5,788 Z"
              id="Oval-10"
              stroke="#FF767C"
              strokeWidth="2"
              strokeDasharray="2,10"
            />
            <ellipse
              id="Oval-10"
              fill="#FA75A6"
              opacity="0.5"
              cx="494.5"
              cy="494"
              rx="213.5"
              ry="212"
            />
            <ellipse
              id="Oval-10"
              fill="#EE538B"
              cx="493.5"
              cy="495"
              rx="150.5"
              ry="150"
            />
            <path
              d="M495,866 C703.211351,866 872,698.778354 872,492.5 C872,286.221646 703.211351,119 495,119 C286.788649,119 118,286.221646 118,492.5 C118,698.778354 286.788649,866 495,866 Z"
              id="Oval-10"
              stroke="#EE538B"
              strokeWidth="2"
              strokeDasharray="2,10"
            />
            <use
              id="Oval-10"
              stroke="#EE538B"
              mask="url(#mask-2)"
              strokeWidth="4"
              opacity="0.6"
              strokeDasharray="2,10"
              xlinkHref="#path-1"
            />
            <path
              d="M494.5,846 C691.389513,846 851,687.956517 851,493 C851,298.043483 691.389513,140 494.5,140 C297.610487,140 138,298.043483 138,493 C138,687.956517 297.610487,846 494.5,846 Z"
              id="Oval-10-Copy"
              stroke="#EE538B"
              strokeWidth="2"
              opacity="0.2"
              strokeDasharray="2,10"
            />
          </g>
        </g>
      </svg>
    );

    const homeTitle = (
      <div className="homepage--hero__wrapper">
        <h1 className="homepage--hero__title">
          <span>We are not our users.</span>
        </h1>
        <p className="homepage--hero__subtitle">
          An authentic focus on people begins with this recognition.
        </p>
      </div>
    );

    return (
      <div>
        <section className="homepage--hero">
          <div className="bx--grid">
            <div className="bx--row">
              <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-5">
                {homeTitle}
              </div>
              <div className="banner-svg bx--col-sm-4 bx--col-md-2 bx--col-lg-4 bx--offset-lg-1">
                {bannerImg}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
