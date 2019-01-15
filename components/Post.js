import React from 'react';
import { Row, Col } from 'reactstrap';
import { getPosts } from '../actions';
import Markdown from 'react-markdown';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java'
import 'prismjs/themes/prism-okaidia.css';

export default class Post extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
        }



    }

    async componentDidMount() {
        try {
            const posts = await getPosts();
            this.setState({ posts })
        } catch (err) {
            console.error(err);
        }
        Prism.highlightAll()
    }
    componentDidUpdate () {
        Prism.highlightAll()
    }

    render() {
        return (
            this.state.posts.map((item, index) => (
                <Row key={index}>
                    <Col md="10" lg="12" className="mx-auto" >
                        <div className="col-lg-8 col-md-10 mx-auto post-preview">
                            <h2 className="post-title">
                                title: {item.title}
                            </h2>
                            <h3 className="post-subtitle">
                                description:{item.description}
                            </h3>

                            <Markdown
                                className="result"
                                source={item.content}/>
                        </div>
                    </Col>
                 
                </Row>
            ))
        )
    }
}
