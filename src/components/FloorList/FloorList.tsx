import * as React from 'react';
import {Fragment} from 'react';

import {
    Container, Row, Col,
} from 'reactstrap';
import RoomInfoBox from '../RoomInfoBox';
import './FloorList.scss';

const FloorList = () => (
    <Fragment>
        <Container className="floorlist">
                <Row className="header">
                    <Col xs={{size: 1}}>Etage</Col>
                    <Col>Räume</Col>
                </Row>
                <Row className="floorRow">
                    <Col xs={{size: 1}}>2 OG</Col>
                    <Col>
                        <Container>
                            <Row>
                                <Col><RoomInfoBox/></Col>
                                <Col><RoomInfoBox/></Col>
                                <Col><RoomInfoBox/></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="floorRow">
                    <Col xs={{size: 1}}>3 OG</Col>
                    <Col>
                        <Container>
                            <Row>
                                <Col><RoomInfoBox/></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="floorRow">
                    <Col xs={{size: 1}}>4 OG</Col>
                    <Col>
                        <Container>
                            <Row>
                                <Col><RoomInfoBox/></Col>
                                <Col><RoomInfoBox/></Col>
                            </Row>
                        </Container>

                    </Col>
                </Row>
        </Container>
    </Fragment>
);
export default FloorList;