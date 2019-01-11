import React from 'react';
import Header from '../components/Header';
import Head from 'next/head';

import { Container, Row,  } from 'reactstrap';


const BaseLayout = (props) => {
  const { className, children, title, cannonical } = props;
  const headerType = props.headerType || 'default';

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="jerga portfolio, jerga developer, jerga freelancig, jerga programming" />
        <meta property="og:title" content="Filip Jerga - programmer, developer, bloger" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:url" content="http://localhost:3000" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="My name is Filip Jerga and I am an experienced software engineer and freelance developer." />
        <link rel="icon" type="image/ico" href="/static/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <div className="layout-container" >
        <Header className={`port-nav-${headerType}`} />
        <main className={`${className}`}>
          <div className="wrapper">
            {children}

            <footer>
              <Container>
                <Row>
                  <div className="col-lg-8 col-md-10 mx-auto">
                    <ul className="list-inline text-center">
                      <li className="list-inline-item">
                        <a target="_blank" href="https://www.facebook.com/groups/217273012433804/?jazoest=26510012195869511271971084598756511378108122691091131211141201017010910474116557610010645897511574116115668565119119586510012177701165586491061151219048557183120488290847377451207611983109114112118697610912011183109109521091159581">
                          <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a target="_blank" href="https://github.com/Jerga99">
                          <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </li>
                    </ul>

                  </div>
                </Row>
              </Container>
            </footer>
            <style jsx>
              {`
                @import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
              `}
            </style>
          </div>
        </main>
      </div>


    </React.Fragment>
  )
}

export default BaseLayout;

