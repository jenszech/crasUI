import * as React from 'react';
import {Container} from "reactstrap";
import TaskList from "../components/TaskList";
import {Component} from "react";
import {RouteComponentProps} from "react-router";
import {ICustomRoomInfoProps} from "../shared/interface/ICustomRoomInfoProps";

class roomDetail extends Component<RouteComponentProps> {
    state = {room: (this.props.location.state as ICustomRoomInfoProps).room};

    constructor(props: Readonly<RouteComponentProps>) {
        super(props);
        console.log("RoomDetail.constructor - room => "+ this.state.room.id);
    }

    render() {
        return (

            <Container>
                <TaskList room={this.state.room}/>
            </Container>
        );
    }
}
export default roomDetail;