import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Container, Row, Col } from 'reactstrap';


class Index extends React.Component {


  render() {
    const { blogs } = this.props;

    return (
      <BaseLayout
        headerType={'landing'}
        className="blog-listing-page"
        title="Filip Jerga - Newest Blogs to Read">
        <div className="masthead" style={{ "backgroundImage": "url('/static/images/home-bg.jpg')" }}>
          <div className="overlay"></div>
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>&lt;ngcook&frasl;&gt;</h1>
                  <span className="subheading">The Next Generation is here </span>

                  <span className="subheading">cook, commit and replay</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BasePage className="blog-body" title="Blogs">
          <Container>
            <Row>
              <div className="col-lg-8 col-md-10 mx-auto post-preview">
                <a href="post.html">
                  <h2 className="post-title">
                    Man must explore, and this is exploration at its greatest
                  </h2>
                  <h3 className="post-subtitle">
                    Problems look mighty small from 150 miles up
                  </h3>
                </a>
                <p className="post-meta">Posted by
                  on September 24, 2018</p>
              </div>
            </Row>
            <div className="clearfix">
              <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
            </div>
          </Container>
        </BasePage>

      </BaseLayout>
    )
  }
}

export default Index;
