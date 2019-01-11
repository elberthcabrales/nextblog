import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Container, Row, Col } from 'reactstrap';


class Index extends React.Component {

  
  render() {
    const {blogs} = this.props;

    return (
      <BaseLayout 
                  headerType={'landing'}
                  className="blog-listing-page"
                  title="Filip Jerga - Newest Blogs to Read">
        <div className="masthead" style={{"backgroundImage": "url('/static/images/home-bg.jpg')"}}>
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
        <BasePage className="portfolio-page" title="Blogs"> 
  
    
        </BasePage>
   
      </BaseLayout>
    )
  }
}

export default Index;
