import * as React from 'react';
import {Col, Container, Row} from "reactstrap";
import SideCard from "../components/SideCard";
import TaskView from "../components/TaskView";
import {Component} from "react";
import {Room} from "../shared/models/Room";
import { RouteComponentProps } from 'react-router';

interface CustomRoomInfoProps {
    room: Room;
}

class roomOverview extends Component<RouteComponentProps> {
    constructor(props: Readonly<RouteComponentProps>) {
        super(props);
        let tmp = props.location.state as CustomRoomInfoProps;
        console.log("constructor - roomOverview => "+ tmp.room.id);
    }

    componentDidMount() {
        console.log("componmentDidMount - roomOverview => "+ this);
    }

    render() {
        return (
            <Container>
                <Row noGutters className="pt-md-3">

                    <Col xs={{order: 2}} md={{size: 3, order: 1}} tag="aside"
                         className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
                        <SideCard/>
                    </Col>

                    <Col xs={{order: 1}} md={{size: 7, offset: 1}} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
                        <TaskView/>
                    </Col>

                </Row>
            </Container>
        );
    }
}
export default roomOverview;