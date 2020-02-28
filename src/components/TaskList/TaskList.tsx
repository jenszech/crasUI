import * as React from 'react';
import {Fragment} from 'react';

import {
    Container, Row, Col,
} from 'reactstrap';
import './TaskList.scss';

const TaskList = () => (
    <Fragment>
        <Container className="taskList">
            <Row className="header">
                <Col xs={{size: 6}}>Raum: <strong>Johannes Gutenberg</strong></Col>
                <Col className="time">Montag, 28.01<br/>10:30 Uhr</Col>
            </Row>
            <Row className="taskRow">
                <Col xs={{size: 3}} className="time">09:00 - 10:00</Col>
                <Col>
                    <p className="title">Nur ein kleiner Dummy Termin</p>
                    <p className="user">Ich</p>
                </Col>
            </Row>
            <Row className="taskRow free">
                <Col xs={{size: 3}}>09:00 - 10:00</Col>
                <Col>
                    <p className="title">frei</p>
                </Col>
            </Row>
            <Row className="taskRow">
                <Col xs={{size: 3}}>09:00 - 10:00</Col>
                <Col>
                    <p className="title">Nur ein kleiner Dummy Termin</p>
                    <p className="user">Ich</p>
                </Col>
            </Row>


        </Container>
    </Fragment>
);

export default TaskList;