import React from 'react';
import Header from '../components/Header';
import Head from 'next/head';

import { Container, Row, } from 'reactstrap';


import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = url => {
  
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


const BaseLayout = (props) => {
  const { className, children, title, cannonical } = props;
  const headerType = props.headerType || 'default';

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="elberth portfolio, elberth developer, elberth freelancig, elberth programming" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:url" content="http://localhost:3000" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="hi my name is elberth cabrales and I am an experienced software developer." />
        <link rel="icon" type="image/ico" href="/static/favicon.ico" />
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
      
      </Head>
      <div className="layout-container" >
        <Header className={`port-nav-${headerType}`} />
        <main className={`${className}`}>

            {children}

            <footer>
              <Container>
                <Row>
                  <div className="col-lg-8 col-md-10 mx-auto">
                    <ul className="list-inline text-center">
                      <li className="list-inline-item">
                        <a target="_blank" href="https://www.facebook.com/elberthcabrales">
                          <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a target="_blank" href="https://github.com/elberthcabrales">
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
        </main>
      </div>


    </React.Fragment>
  )
}

export default BaseLayout;

