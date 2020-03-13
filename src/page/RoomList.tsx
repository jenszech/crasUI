import * as React from 'react';
import { Container} from "reactstrap";
import FloorList from "../components/FloorList";
import {Component} from "react";
import {RouteComponentProps} from "react-router";

class RoomList extends Component<RouteComponentProps> {
    constructor(props: Readonly<RouteComponentProps>) {
        super(props);
        console.log("RoomOverview.constructor");
    }

    render() {
        return (
            <Container>
                <FloorList/>
            </Container>
        );
    }
}
export default RoomList;