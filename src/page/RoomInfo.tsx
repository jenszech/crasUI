import * as React from 'react';
import {Col, Container, Row} from "reactstrap";
import SideCard from "../components/SideCard";
import {Component} from "react";
import { RouteComponentProps } from 'react-router';
import { ICustomRoomInfoProps} from "../shared/interface/ICustomRoomInfoProps";
import RoomInfoPanel from "../components/RoomInfoPanel/RoomInfoPanel";
import RoomNavigationButtons from "../components/RoomNavigationButtons/RoomNavigationButtons";


class roomOverview extends Component<RouteComponentProps> {
    state = {room: (this.props.location.state as ICustomRoomInfoProps).room};

    constructor(props: Readonly<RouteComponentProps>) {
        super(props);
        console.log("RoomOverview.constructor - room => "+ this.state.room.id);
    }

    render() {
        return (
            <Container>
                <Row noGutters className="pt-md-3">

                    <Col xs={{order: 2}} md={{size: 3, order: 1}} tag="aside"
                         className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
                        <SideCard room={this.state.room}/>
                    </Col>

                    <Col xs={{order: 1}} md={{size: 7, offset: 1}} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
                        <RoomInfoPanel room={this.state.room}/>
                        <RoomNavigationButtons page="info" room={this.state.room}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default roomOverview;