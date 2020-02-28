/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import * as React from 'react';
import {Fragment} from 'react';

import {
    Container, Row, Col,
} from 'reactstrap';
import './RoomInfoBox.scss';
import {UncontrolledTooltip} from 'reactstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faCheckSquare, faAppleAlt, faThumbtack, faStop, faVideo, faMicrophone, faFileCode,
    faSquare, faDesktop, faHdd, faPhone, faHome
} from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faAppleAlt, faThumbtack, faStop, faVideo, faMicrophone, faFileCode,
    faSquare, faDesktop, faHdd, faPhone, faHome);

const RoomInfoBox = () => {
    return (
        <Fragment>
            <Container className="roomInfoBox">
                <Row xs="1">
                    <Col className="room-name">Johannes Gutenberg</Col>
                    <Col className="room-desc">8 Personen</Col>
                    <Col className="room-meta">
                        <span id="iconAppleTv"><FontAwesomeIcon  icon="apple-alt"/></span>
                        <span id="iconPinnwand"><FontAwesomeIcon icon="thumbtack"/></span>
                        <span id="iconMobVk"><FontAwesomeIcon icon="stop"/></span>
                        <span id="iconCamera"><FontAwesomeIcon icon="video"/></span>
                        <span id="iconMobPolycom"><FontAwesomeIcon icon="microphone"/></span>
                        <span id="iconFlipchart"><FontAwesomeIcon icon="file-code"/></span>
                        <span id="iconWhiteboard"><FontAwesomeIcon icon="square"/></span>
                        <span id="iconTv"><FontAwesomeIcon icon="desktop"/></span>
                        <span id="iconBeamer"><FontAwesomeIcon icon="hdd"/></span>
                        <span id="iconPolycom"><FontAwesomeIcon icon="phone"/></span>
                        <span id="iconDesktop"><FontAwesomeIcon icon="home"/></span>
                        <UncontrolledTooltip placement="bottom" target="iconAppleTv">Apple TV</UncontrolledTooltip>
                        <UncontrolledTooltip placement="bottom" target="iconPinnwand">Pinnwand</UncontrolledTooltip>
                        <UncontrolledTooltip placement="bottom" target="iconMobVk">Mobile Videokonferenz
                            Anlage</UncontrolledTooltip>
                        <UncontrolledTooltip placement="bottom" target="iconCamera">Camera</UncontrolledTooltip>
                        <UncontrolledTooltip placement="bottom" target="iconMobPolycom">Mobile Polycom
                            Anlange</UncontrolledTooltip>
                        <UncontrolledTooltip placement="bottom" target="iconFlipchart">FlipChart</UncontrolledTooltip>
                        <UncontrolledTooltip placement="bottom" target="iconWhiteboard">Whiteboard</UncontrolledTooltip>
                        <UncontrolledTooltip placement="bottom" target="iconTv">Monitor</UncontrolledTooltip>
                        <UncontrolledTooltip placement="bottom" target="iconBeamer">Beamer</UncontrolledTooltip>
                        <UncontrolledTooltip placement="bottom" target="iconPolycom">Polycom</UncontrolledTooltip>
                        <UncontrolledTooltip placement="bottom" target="iconDesktop">Schreibtisch</UncontrolledTooltip>

                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default RoomInfoBox;