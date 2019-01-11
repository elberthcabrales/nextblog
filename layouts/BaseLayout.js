import React from 'react';
import Header from '../components/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const { className, children, title, cannonical } = props;
  const headerType = props.headerType || 'default';

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="jerga portfolio, jerga developer, jerga freelancig, jerga programming"/>
        <meta property="og:title" content="Filip Jerga - programmer, developer, bloger" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:url" content="http://localhost:3000"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="My name is Filip Jerga and I am an experienced software engineer and freelance developer."/>
        <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <div className="layout-container" >
        <Header className={`port-nav-${headerType}`}/>
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>

      
    </React.Fragment>
  )
}

export default BaseLayout;

