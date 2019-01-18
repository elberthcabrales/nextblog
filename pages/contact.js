import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { creatContact } from '../actions/index'

import { Alert, Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText, Badge } from 'reactstrap';
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      message:""
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onDismiss() {
    this.setState({ visible: false });
  }
  async handleSubmit(e) {
    e.preventDefault();
    e.persist()
    let { email, subject, message } = e.target;
    const response = await creatContact({ email: email.value, subject: subject.value, message: message.value });
    this.setState({ visible: true });
    e.target.reset()
    if (response.status === 200) {
      this.setState({ message: "your message was sent successfully "});
    }else{
      this.setState({message:"error "+response.status})
    }
  }
  render() {
    return (
      <BaseLayout
        className="blog-listing-page"
        title="Filip Jerga - Newest Blogs to Read">
        <BasePage className="portfolio-page" title="contact">
          <Container>
            <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
             {this.state.message}
            </Alert>
            <Row>
              <Col sm="6">
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                      <Input type="email" name="email" id="exampleEmail" placeholder="email@example.com" required/>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Subject</Label>
                    <Col sm={10}>
                      <Input type="text" name="subject" id="subject" placeholder="subject" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="exampleText" sm={2} placeholder="Message">Message</Label>
                    <Col sm={10}>
                      <Input type="textarea" name="message" id="message" placeholder="write your message here" required/>
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
                    <br></br>
                  </FormGroup>
                </Form>
              </Col>
              <Col sm="6">
                <h1>Information contact</h1>
                <p><Badge className="primary">Name:</Badge> elberth cabrales</p>
                <p><Badge className="primary">phone:</Badge> (+52) 323 130 44 38</p>
                <p><Badge className="primary">email:</Badge> elberthcabrales@gmail.com</p>
              </Col>
            </Row>
          </Container>
        </BasePage>

      </BaseLayout>
    )
  }
}

export default About;
