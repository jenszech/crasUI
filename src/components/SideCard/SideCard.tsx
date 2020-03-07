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
    private date = new Date();

    getFormatTime(date: Date): string {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        };
        return (new Intl.DateTimeFormat('de-DE', options).format(date));
    }
    getFormatDate(date: Date): string {
        const options = {
            weekday: 'long',
        };
        return (new Intl.DateTimeFormat('de-DE', options).format(date));
    }
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
                        <Col className="current-date">{this.getFormatDate(this.date)}, {this.getFormatTime(this.date)} Uhr</Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
// noinspection JSUnusedGlobalSymbols
export default SideCard;