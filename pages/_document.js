// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';

import Router from "next/router";
import NProgress from "nprogress";
  
  Router.onRouteChangeStart = url => {
    console.log(url);
    NProgress.start();
  };
  
  Router.onRouteChangeComplete = () =>NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();
  
export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="description" content="My name is Filip Jerga and I am an experienced software engineer and freelance developer. I have a Master's degree in Artificial Intelligence and several years of experience working on a wide range of technologies and projects from C++ development for ultrasound devices to modern mobile and web applications in React and Angular. Throughout my career, I have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience. I invite you to take my course, where I have put a lot of effort to explain web and software engineering concepts in a detailed, hands-on and understandable way." />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />


                </body>

            </html>
        )
    }
}