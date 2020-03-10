import * as React from 'react';
import { Component, Fragment } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './RoomNavigationButtons.scss';
import {Room} from "../../shared/models/Room";
import history from "../../shared/history";

export interface ICustomRoomButtonProps {
    page: string;
    room: Room;
}

class RoomNavigationButtons extends Component<ICustomRoomButtonProps> {

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
                <Container className="button">
                    <Row>
                        <Col className="buttonLeft" onClick={() => this.showRoom(this.props.room)}>
                            &gt;&gt; Raum Details
                        </Col>
                        <Col className="buttonRight" onClick={() => this.showTaskList(this.props.room)}>
                            &gt;&gt; Alle Termine anzeigen
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
// noinspection JSUnusedGlobalSymbols
export default RoomNavigationButtons;