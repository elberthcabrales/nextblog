import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../components/BasePage';


import { Container, Row, Col, Progress } from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout
        className="blog-listing-page"
        title="About">
        <BasePage className="about-page">
          <Container>
            <Row className="mt-5">
              <Col md="12">
                <div className="left-side">
                  <h1 className="title fadein">About me</h1>
                  <h4 className="subtitle fadein">Web Developer</h4>
                  <p>
                  Hello, my name is elberth cabrales and I was a .net developer until I got to know better the open source technologies, linux and a community in guadalajara called linuxcabal, it is in that part of my life whene my passion for software was increment.
                  I am currently a fullstack developer with 6+ years of experience.
                </p>
                <h4 className="subtitle fadein">Skills</h4>
                  <div className="text-center">Node - expressjs, hapijs, adonis, strapi, Keystonejs</div>
                  <Progress value={90} />
                  <div className="text-center">JAVA - android, swing, hibernate, Spring</div>
                  <Progress value={85} />
                  <div className="text-center">Vue / Nuxt</div>
                  <Progress value="85" />
                  <div className="text-center">Centos / Debian</div>
                  <Progress multi>
                    <Progress bar value="15">FTP Server</Progress>
                    <Progress bar color="success" value="20">Mail Server Postfix</Progress>
                    <Progress bar color="dark" value="20">Selinux / UFW</Progress>
                    <Progress bar color="secondary" value="20">SSH</Progress>
                    <Progress bar color="info" value="15">TLS</Progress>
                    <Progress bar color="warning" value="15">DNS</Progress>
                  </Progress>
                  <div className="text-center">React / Next</div>
                  <Progress value="75" />
                  <div className="text-center">HTML</div>
                  <Progress multi>
                    <Progress bar value="15">WebRTC</Progress>
                    <Progress bar color="success" value="20">Canvas</Progress>
                    <Progress bar color="dark" value="20">Drag and Drop</Progress>
                    <Progress bar color="secondary" value="20">PostgresSQl</Progress>
                    <Progress bar color="warning" value="15">LocalStorage SQL</Progress>
                    <Progress bar color="danger" value="25">Web Workers</Progress>
                    <Progress bar color="danger" value="25">WebSockets</Progress>
                  </Progress>
                  <div className="text-center">Angular 1, 2+, ionic</div>
                  <Progress value={70} />
                  <div className="text-center">Unit test / Functional test</div>
                  <Progress value={80} />
                  <div className="text-center">SQL / NOsql</div>
                  <Progress multi>
                    <Progress bar value="15">MongoDb</Progress>
                    <Progress bar color="success" value="20">Redis</Progress>
                    <Progress bar color="dark" value="20">Informix</Progress>
                    <Progress bar color="secondary" value="20">PostgresSQl</Progress>
                    <Progress bar color="info" value="15">Rethinkdb</Progress>
                    <Progress bar color="warning" value="15">Microsoft SQL</Progress>
                    <Progress bar color="danger" value="25">MariaDb/Mysql</Progress>
                  </Progress>
                  <div className="text-center">Python - Django, Odoo</div>
                  <Progress value={75} />
                  <div className="text-center">MERN / MEAN</div>
                  <Progress value={85} />
                  <div className="text-center">ASP MVC - C#/VB</div>
                  <Progress value={85} />
                  <div className="text-center">PHP - Laravel 5+</div>
                  <Progress value={85} />
                  <div className="text-center">CSS/SASS</div>
                  <Progress multi>
                    <Progress bar value="15">Bulma</Progress>
                    <Progress bar color="success" value="20">Material Design</Progress>
                    <Progress bar color="dark" value="20">Boostrap</Progress>
                    <Progress bar color="secondary" value="20">Foundation</Progress>
                    <Progress bar color="info" value="25">Element ui</Progress>
                  </Progress>
                 
                  <div className="text-center">AWS</div>
                  <Progress multi>
                    <Progress bar value="40">EC2,53,S3,EKS </Progress>
                  </Progress>
                  <div className="text-center">DevOps</div>
                  <Progress multi>
                    <Progress bar value="15">Ansibel</Progress>
                    <Progress bar color="success" value="30">Docker</Progress>
                    <Progress bar color="dark" value="30">Nginx/Apache</Progress>
                    <Progress bar color="warning" value="20">Git</Progress>
                    <Progress bar color="primary" value="15">Jenkis</Progress>
                    <Progress bar color="info" value="15">Scrum</Progress>
                    <Progress bar color="danger" value="15">Vagrant</Progress>
                  </Progress>
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
