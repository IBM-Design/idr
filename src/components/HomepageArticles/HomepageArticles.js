import React from "react";
import ArticleCard from "gatsby-theme-carbon/src/components/ArticleCard";
import PropTypes from "prop-types";

export default class HomepageArticles extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    readTime: PropTypes.string,
    href: PropTypes.string,
    alt: PropTypes.string,
    color: PropTypes.string,
    src: PropTypes.node
  };
  render() {
    return (
      <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--no-gutter--left bx--no-gutter-md--left article-right-gutter">
        <ArticleCard
          title={this.props.title}
          author={this.props.author}
          readTime={this.props.readTime}
          href={this.props.href}
          color={this.props.color}
          actionIcon="launch"
        >
          <img alt={this.props.alt} src={this.props.img} />
        </ArticleCard>
      </div>
    );
  }
}
