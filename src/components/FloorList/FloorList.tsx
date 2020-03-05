import * as React from 'react';
import {Fragment} from 'react';
import {
    Container, Row, Col,
} from 'reactstrap';
import RoomInfoBox from '../RoomInfoBox';
import './FloorList.scss';
import {Component} from "react";
import {RoomService} from "../../shared/roomService";
//import {Room} from '../shared/models/Room';
//import {AusstattungType} from '../shared/models/AusstattungType';

class FloorList extends Component {
    state = {floors: [], rooms: []};
    private roomsService = new RoomService();

    componentDidMount() {
        this.roomsService.loadRooms(this.updateUi);
        console.log("Fetch Roomlist final 2: ");

    }

    private updateUi = (): void => {
        this.setState({
            floors: Array.from(this.roomsService.getFloors()),
            rooms: this.roomsService.getRooms()
        });
    };

    render() {
        return (
            <Fragment>
                <Container className="floorlist">
                    <Row className="header">
                        <Col xs={{size: 1}}>Etage</Col>
                        <Col>Räume</Col>
                    </Row>
                    {this.state.floors.map(floor => (
                        <Row className="floorRow">
                            <Col xs={{size: 1}}>{floor}</Col>
                            <Col>
                                <Container>
                                    <Row>
                                        {this.roomsService.getRoomByFloor(floor)?.map(room => (
                                            <Col><RoomInfoBox room={room}/></Col>
                                        ))}
                                    </Row>
                                </Container>

                            </Col>
                        </Row>
                    ))}
                </Container>
            </Fragment>
        );
    }
}
// noinspection JSUnusedGlobalSymbols
export default FloorList;