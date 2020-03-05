import * as React from 'react';
import { Component, Fragment } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './TaskView.scss';

class TaskView extends Component {

    state = {post: null};

    componentDidMount() {
        //this.setState({post: response.data}));
    }

    //{this.state.post &&

    render() {
        return (
            <Fragment>

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

            </Fragment>
        );
    }

}
// noinspection JSUnusedGlobalSymbols
export default TaskView;