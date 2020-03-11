import * as React from 'react';
import { Container} from "reactstrap";
import BookingSelection from "../components/BookingSelection";
import {Component} from "react";
import {RouteComponentProps} from "react-router";
import {ICustomRoomBookProps} from "../shared/interface/ICustumRoomBookProps";

class Booking extends Component<RouteComponentProps> {
    state = {
        room: (this.props.location.state as ICustomRoomBookProps).room,
        appointment: (this.props.location.state as ICustomRoomBookProps).appointment
    };

    render() {
        return (
            <Container>
                <BookingSelection room={this.state.room} appointment={this.state.appointment}/>
            </Container>
        );
    }
}
export default Booking;