import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Container, Row, Col, Button } from 'reactstrap';
import { getBlogBySlug } from '../actions';
import Markdown from 'react-markdown';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java'
import 'prismjs/themes/prism-okaidia.css';
import Link from "next/link";
import Error from './_error';


class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps({ query }) {
    try {
      const post = await getBlogBySlug(query.title);
      const page = query.page;
      return { post, page }
    } catch (err) {
      console.error(err);
    }
  }
  async componentDidMount() {
    Prism.highlightAll()
  }
  componentDidUpdate() {
    Prism.highlightAll()
  }

  render() {
    if (this.props.post === undefined) {
      return <Error status={404} />;
    }
    return (
      <BaseLayout
        className="blog-listing-page"
        title={this.props.post.title}>
        <BasePage className="portfolio-page" title="Blogs">
          <Container>
            <Row>
              <Col md="12" lg="12" className="mx-auto" >
                <div className="col-lg-10 col-md-12 mx-auto post-preview">
                  <h2 className="post-title">
                    title: {this.props.post.title}
                  </h2>
                  <h3 className="post-subtitle">
                    description:{this.props.post.description}
                  </h3>

                  <Markdown
                    className="result"
                    source={this.props.post.content} />
                </div>
              </Col>
            </Row>
            <div className="clearfix">
              <Link href={`/?page=${this.props.page}`}>
                <Button color="warning floa-left">Back &larr;</Button>
              </Link>

            </div>
          </Container>
        </BasePage>

      </BaseLayout>
    )
  }
}

export default Post;
