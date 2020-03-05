/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import * as React from 'react';
import {Fragment} from 'react';

import {
    Container, Row, Col,
} from 'reactstrap';
import './RoomInfoBox.scss';
import {Component} from "react";
import {Room} from "../../shared/models/Room";
import MetaIcon from "../MetaIcon";

interface CustomRoomInfoProps {
    room: Room;
}

class RoomInfoBox extends Component<CustomRoomInfoProps> {

    render() {
        return (
            <Fragment>
                <Container className="roomInfoBox">
                    <Row xs="1">
                        <Col className="room-name">{this.props.room.meta.room}</Col>
                        <Col className="room-desc">{this.props.room.meta.plaetze} Personen</Col>
                        <Col className="room-meta">
                            {this.props.room.meta.ausstattung?.map(ausstattung => (
                                <MetaIcon icon={ausstattung}/>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
// noinspection JSUnusedGlobalSymbols
export default RoomInfoBox;