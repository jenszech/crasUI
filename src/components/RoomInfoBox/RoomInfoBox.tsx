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
import { CustomRoomInfoProps} from "../../shared/interface/CustomRoomInfoProps";
import history from '../../shared/history';

class RoomInfoBox extends Component<CustomRoomInfoProps> {
    constructor(props: Readonly<CustomRoomInfoProps>) {
        super(props);
        this.openRoom = this.openRoom.bind(this);
    }

    public openRoom(room : Room) {
        console.log("Open Room: "+room.id);
        history.push({
            pathname: '/overview',
            search: '',
            state: { room: room }
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="roomInfoBox" onClick={() => this.openRoom(this.props.room)}>
                    <Row xs="1">
                        <Col className="room-name">{this.props.room.meta.room}</Col>
                        <Col className="room-desc">{this.props.room.meta.plaetze} Personen</Col>
                        <Col className="room-meta">
                            {this.props.room.meta.ausstattung?.map(ausstattung => (
                                <MetaIcon key={ausstattung} icon={ausstattung}/>
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