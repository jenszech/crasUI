import * as React from 'react';
import {Fragment} from 'react';

import {
    Container, Row, Col,
} from 'reactstrap';
import './SideCard.scss';

const BANNER = './roomImages/Raum_Gutenberg@tde.thalia.de.jpg';

const SideCard = () => (
    <Fragment>
        <Container className="sidecard">
            <Row xs="1">
                <Col className="room-name">
                    Raum:<br/>
                    <strong>Johannes Gutenberg</strong>
                </Col>
                <Col className="room-image"><img width="100%" src={BANNER} alt="Johannes Gutenberg"/></Col>
                <Col className="room-desc">* um 1400 in Mainz<br/> † vor dem 26. Februar 1468 ebenda<br/> gilt als Erfinder des modernen Buchdrucks</Col>
                <Col className="current-date">Montag, 10:00 Uhr</Col>
            </Row>
        </Container>
    </Fragment>
);
// noinspection JSUnusedGlobalSymbols
export default SideCard;