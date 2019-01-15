import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../components/BasePage';
import ListPosts from '../components/ListPosts'

import { Container, Button } from 'reactstrap';


class Index extends React.Component {

  constructor(props) {
    super(props);

    const start = 1;
    const limit = 10;

    this.state = {
      start,
      limit
    };

    this.handleOlder = this.handleOlder.bind(this);
  }
  handleOlder() {
   
    this.setState({
      start: (this.state.start >1 )? this.state.start-1:1
    });
    
   
  }

  render() {
    const { blogs } = this.props;

    return (
      <BaseLayout
        headerType={'landing'}
        className="blog-listing-page"
        title="Filip Jerga - Newest Blogs to Read">
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
            <ListPosts start={this.state.start} limit={this.state.limit}></ListPosts>
          </Container>
          <div className="clearfix">
              <Button className="float">newer Posts &larr;</Button>
              
              <Button className="float-right" onClick={() => this.handleOlder()}>Older Posts &rarr;</Button>
            </div>
        </BasePage>

      </BaseLayout>
    )
  }
}

export default Index;
