import * as React from 'react';
import { Component, Fragment } from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'reactstrap';
import './Post.scss';

class Post extends Component {

    state = {post: null};

    componentDidMount() {
        axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=4&format=text')
            .then(response => this.setState({post: response.data}));
    }

    render() {
        return (
            <Fragment>
                {this.state.post &&
                <Container className="task">
                    <Row xs="1">
                        <Col className="time">12:00 - 14:00</Col>
                        <Col className="title">Termin</Col>
                        <Col className="user">Ich</Col>
                    </Row>
                    <Row xs="1" className="free">
                        <Col className="time">14:00 - 18:00</Col>
                        <Col className="title">frei</Col>
                        <Col className="user">&nbsp;</Col>
                    </Row>
                </Container>
                }
            </Fragment>
        );
    }

}
export default Post;