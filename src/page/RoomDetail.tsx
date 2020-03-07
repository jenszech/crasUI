import * as React from 'react';
import {Container} from "reactstrap";
import TaskList from "../components/TaskList";
import {Component} from "react";
import {RouteComponentProps} from "react-router";
import {CustomRoomInfoProps} from "../shared/interface/CustomRoomInfoProps";

class roomDetail extends Component<RouteComponentProps> {
    state = {room: (this.props.location.state as CustomRoomInfoProps).room};

    constructor(props: Readonly<RouteComponentProps>) {
        super(props);
        console.log("constructor - roomOverview => " + this.state.room.id);
    }

    componentDidMount() {
        //console.log("componmentDidMount - roomOverview => "+ this);
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