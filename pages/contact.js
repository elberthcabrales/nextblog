import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Container, Row, Col } from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout
        className="blog-listing-page"
        title="Filip Jerga - Newest Blogs to Read">
        <div className="masthead" style={{ "backgroundImage": "url('/static/images/contact-bg.jpg')" }}>
          <div className="overlay"></div>
        
        </div>
        <BasePage className="portfolio-page" title="contact">


        </BasePage>

      </BaseLayout>
    )
  }
}

export default About;
