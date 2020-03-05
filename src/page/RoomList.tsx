import * as React from 'react';
import { Container} from "reactstrap";
import FloorList from "../components/FloorList";
import {Component} from "react";


class RoomList extends Component {
    render() {
        return (
            <Container>
                <FloorList/>
            </Container>
        );
    }
}
export default RoomList;