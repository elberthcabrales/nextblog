import React from 'react';
import { Row, Col } from 'reactstrap';
import { getPosts } from '../actions';
import Link from "next/link";

import moment from 'moment';



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
    }
  
    render() {
        return (
            this.state.posts.map((item, index) => (
                <Row key={index}>
                    <Col md="10" lg="12" className="mx-auto" >
                        <div className="col-lg-8 col-md-10 mx-auto post-preview">
                        <Link  href={`/post?title=${item.slug}`}>
                            <h1 className="post-title post-title-linked">
                                title: {item.title}
                            </h1>
                        </Link>
                            <p className="post-subtitle">
                                description:{item.description}
                            </p>
                            <p className="post-meta">Created at&ensp;
                            {moment(item.createdAt).format('LLLL')}</p>
                            <hr></hr>
                        </div>
                    </Col>
                </Row>
            ))
            
        )
    }
}
