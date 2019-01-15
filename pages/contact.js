import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
          <Container>
            <Row className="mt-5">
              <Form>
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </Col>
                </FormGroup>
                
                <FormGroup row>
                  <Label for="exampleSelect" sm={2}>Subject</Label>
                  <Col sm={10}>
                    <Input type="text" name="select" id="exampleSelect" />
                  </Col>
                </FormGroup>
         
                <FormGroup row>
                  <Label for="exampleText" sm={2}>Message</Label>
                  <Col sm={10}>
                    <Input type="textarea" name="text" id="exampleText" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                
                  <Col sm={10}>
                 
                    <FormText color="muted">
                      This is some placeholder block-level help text for the above input.
                      It's a bit lighter and easily wraps to a new line.
            </FormText>
                  </Col>
                </FormGroup>
               
               
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </Row>
          </Container>

        </BasePage>

      </BaseLayout>
    )
  }
}

export default About;
