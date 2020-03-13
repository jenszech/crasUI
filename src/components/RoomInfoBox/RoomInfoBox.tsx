import * as React from 'react';
import {Fragment} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './RoomInfoBox.scss';
import {Component} from "react";
import MetaIcon from "../MetaIcon";
import { ICustomRoomInfoProps} from "../../shared/interface/ICustomRoomInfoProps";
import {RoutingHelper} from "../../shared/utils/RoutingHelper";

class RoomInfoBox extends Component<ICustomRoomInfoProps> {
    render() {
        return (
            <Fragment>
                <Container className="roomInfoBox" onClick={() => RoutingHelper.showRoomOverview(this.props.room)}>
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