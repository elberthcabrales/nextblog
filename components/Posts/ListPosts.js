import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { getPosts, coutPosts } from '.../../../actions';
import Link from "next/link";

import moment from 'moment';

const Pagesbtn = (props) => {
    return (
        props.pages.map((item, key) => (
            <React.Fragment key={key}>
             <span className={`btn badge-primary`} onClick={()=>{props.pageTo(item)}}>{item+1}</span>
             &ensp;
            </React.Fragment>
        ))
    )
}
const List = ({ posts, page }) => {
    return (
        posts.map((item, index) => (
            <Row key={index}>
                <Col md="10" lg="12" className="mx-auto" >
                    <div className="col-lg-8 col-md-10 mx-auto post-preview">
                        <Link href={`/post?title=${item.slug}&page=${page}`}>
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
export default class Post extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            start: 0,
            limit: 5,
            posts: [],
            count: [],
            currentPage:0
        };
    }
    async componentDidMount() {
        const {currentPage} = this.props;
        try {
            const counted = await coutPosts();
            this.pageTo(currentPage||0);
            let paginated = Math.trunc(counted/5)+1
            let count = Array.from(Array(paginated).keys());
            this.setState({count: count })
        } catch (err) {
            console.error(err);
        }
    }
    handleOlder() {
        this.setState({
            start: this.state.start + 1
        });
    }
    pageTo = position => {
        getPosts(position).then(posts =>  this.setState({posts:posts,currentPage:position}))
    }
    render() {
        return (
            <div>
                <List posts={this.state.posts} page={this.state.currentPage}></List>
                <div className="clearfix">
                    <Pagesbtn total={1} pageTo={this.pageTo} pages={this.state.count}/>
                </div>
            </div>
        )
    }
}
