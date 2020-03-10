import * as React from 'react';
import { Component, Fragment } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './RoomInfoPanel.scss';
import { ICustomRoomInfoProps} from "../../shared/interface/ICustomRoomInfoProps";
import MetaIcon from "../MetaIcon";
import {Room} from "../../shared/models/Room";
import history from "../../shared/history";
import MetaIconDetail from "../MetaIconDetail/MetaIconDetail";

class RoomInfoPanel extends Component<ICustomRoomInfoProps> {


    public showRoom(room : Room) {
        console.log("Open Room: "+room.id);
        history.push({
            pathname: '/overview',
            search: '',
            state: { room: room }
        })
    }
    public showTaskList(room : Room) {
        console.log("Open Room: "+room.id);
        history.push({
            pathname: '/detail',
            search: '',
            state: { room: room }
        })
    }

render() {
        return (
            <Fragment>
                <Container className="roomInfoPanel">
                    <Row xs="2">
                        <Col className="title" xs={{size: 3}}>Ort</Col>
                        <Col className="info" xs={{size: 7}}>{this.props.room.meta.etage}</Col>
                    </Row>
                    <Row xs="2">
                        <Col className="title" xs={{size: 3}}>Sitzplätze</Col>
                        <Col className="info" xs={{size: 7}}>{this.props.room.meta.plaetze}</Col>
                    </Row>
                    <Row xs="2">
                        <Col className="title" xs={{size: 3}}>Telephon</Col>
                        <Col className="info" xs={{size: 7}}>{this.props.room.meta.tel}</Col>
                    </Row>
                    <Row xs="2">
                        <Col className="title" xs={{size: 3}}>Ausstattung</Col>
                        <Col className="info">
                            {this.props.room.meta.ausstattung?.map(ausstattung => (
                                <MetaIconDetail key={ausstattung} icon={ausstattung}/>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
// noinspection JSUnusedGlobalSymbols
export default RoomInfoPanel;