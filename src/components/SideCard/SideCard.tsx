import * as React from 'react';
import {Fragment} from 'react';
import { CustomRoomInfoProps} from "../../shared/interface/CustomRoomInfoProps";

import {
    Container, Row, Col,
} from 'reactstrap';
import './SideCard.scss';
import {Component} from "react";

const BANNER_PATH = './roomImages/';

class SideCard extends Component<CustomRoomInfoProps> {
    getImagePath() {
        return BANNER_PATH + this.props.room.id+".jpg";
    }
    render() {
        return (
            <Fragment>
                <Container className="sidecard">
                    <Row xs="1">
                        <Col className="room-name">
                            Raum:<br/>
                            <strong>{this.props.room.meta.room}</strong>
                        </Col>
                        <Col className="room-image"><img width="100%" src={this.getImagePath()} alt="{this.props.room.meta.room}"/></Col>
                        <Col className="room-desc">{this.props.room.meta.description}</Col>
                        <Col className="current-date">Montag, 10:00 Uhr</Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
// noinspection JSUnusedGlobalSymbols
export default SideCard;