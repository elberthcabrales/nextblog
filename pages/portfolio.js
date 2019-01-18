import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Container, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


class About extends React.Component {

  render() {
    return (
      <BaseLayout
        className="blog-listing-page"
        title="Filip Jerga - Newest Blogs to Read">
        <BasePage className="portfolio-page" title="Portfolio">
          <Container>
            <Row>
              <Col sm="6">
                <Card body className="mar-buttom">
                  <CardTitle>Hotel CMS with laravel</CardTitle>
                  <CardText>I colaborate in CMS </CardText>
                 
                </Card>
              </Col>
              <Col sm="6">
                <Card body className="mar-buttom">
                  <CardTitle>Erp with Django</CardTitle>
                  <CardText>Simple erp with point of sale and crm</CardText>
                </Card>
              </Col>
              <Col sm="6">
                <Card body className="mar-buttom">
                  <CardTitle>Paymente departament SEJ</CardTitle>
                  <CardText>automation in process requiered</CardText>
                </Card>
              </Col>
              <Col sm="6">
                <Card body className="mar-buttom">
                  <CardTitle>CMS in nextjs for collages</CardTitle>
                  <CardText>I create an cms with server side rendering and nodejs</CardText>
                </Card>
              </Col>
              <Col sm="6">
                <Card body className="mar-buttom">
                  <CardTitle>Aplication of change coins</CardTitle>
                  <CardText>Aplication with angular 1 and laravel php</CardText>
                </Card>
              </Col>
              <Col sm="6">
                <Card body className="mar-buttom">
                  <CardTitle>Poin of sale in java swing</CardTitle>
                  <CardText>Java Swing with ORM hibernate</CardText>
                </Card>
              </Col>
              <Col sm="6">
                <Card body className="mar-buttom">
                  <CardTitle>Poin of sale in java swing</CardTitle>
                  <CardText>Java Swing with ORM hibernate</CardText>
                </Card>
              </Col>
            </Row>
          </Container>
        </BasePage>

      </BaseLayout>
    )
  }
}

export default About;
