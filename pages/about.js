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
        <BasePage className="portfolio-page" title="Blogs">
          <Container>
            <Row className="mt-5">
              <Col md="6">
                <div className="left-side">
                  <h1 className="title fadein">Hello, Welcome</h1>
                  <h4 className="subtitle fadein">To About Page</h4>
                  <p className="subsubTitle fadein">Feel free to read short description about me.</p>
                </div>
              </Col>
              <Col md="6">
                <div className="fadein">
                  <p>My name is Filip Jerga and I am an experienced software engineer and freelance developer. </p>
                  <p>
                    I have a Master's degree in Artificial Intelligence and several years of experience working
                    on a wide range of technologies and projects from C++ development for ultrasound devices to
                     modern mobile and web applications in React and Angular.
                </p>
                  <p>
                    Throughout my career, I have acquired advanced technical knowledge and the ability to explain
                    programming topics clearly and in detail to a broad audience. I invite you to take my course,
                    where I have put a lot of effort to explain web and software engineering concepts in a detailed,
                    hands-on and understandable way.
                </p>
                </div>
              </Col>
            </Row>
          </Container>
        </BasePage>

      </BaseLayout>
    )
  }
}

export default About;
