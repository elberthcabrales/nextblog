import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../components/BasePage';
import ListPosts from '../components/Posts/ListPosts'
import { Container } from 'reactstrap';

class Index extends React.Component {
 
  static getInitialProps({ query }) {
      const page = query.page;
      return {page}
  }
  render() {
    return (
      <BaseLayout
        headerType={'landing'}
        className="blog-listing-page"
        title="Blog">
        <div className="masthead" style={{ "backgroundImage": "url('/static/images/home-bg.jpg')" }}>
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
        <BasePage className="blog-body" title="Blogs">
          <Container>
            <ListPosts currentPage={this.props.page}></ListPosts>
          </Container>
        </BasePage>

      </BaseLayout>
    )
  }
}

export default Index;
