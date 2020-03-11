import * as React from 'react';
import {Fragment} from 'react';
import {
    Container, Row, Col,
} from 'reactstrap';
import RoomInfoBox from '../RoomInfoBox';
import './BookingSelection.scss';
import {Component} from "react";
import {RoomService} from "../../shared/roomService";
import RoomNavigationButtons from "../RoomNavigationButtons/RoomNavigationButtons";
import {ICustomRoomInfoProps} from "../../shared/interface/ICustomRoomInfoProps";
import {Room} from "../../shared/models/Room";
import {Booking} from "../../shared/models/Booking";

export interface ICustomRoomBookProps {
    room: Room;
    appointment: Booking;
}

class BookingSelection extends Component<ICustomRoomBookProps> {
    durations = [15, 30, 45, 60, 75, 90, 105, 120];
    maxDurations: Array<number> = [] ;

    constructor(props: Readonly<ICustomRoomBookProps>) {
        super(props);
        this.maxDurations = this.getMaxDuration(
            this.getStartTime(this.props.appointment.startTime), this.props.appointment.endTime
        );
    }

    render() {
        return (
            <Fragment>
                <Container className="book">
                    <Row className="bookRow">
                        <Col xs={{size: 1}}>Start</Col>
                        <Col>{this.getFormatTime(this.getStartTime(this.props.appointment.startTime))} Uhr</Col>
                    </Row>
                    <Row key="1" className="bookRow">
                        <Col xs={{size: 1}}>Dauer</Col>
                        <Col>
                            {this.maxDurations.map((duration, index) => (
                                <p className="title">{duration}</p>
                            ))}
                        </Col>
                    </Row>
                </Container>
                <RoomNavigationButtons page="info" room={this.props.room}/>
            </Fragment>
        );
    }

    private getMaxDuration(start: Date, end: Date): Array<number> {
        let diff = (end.getTime() - start.getTime()) / 60000;
        var max = this.durations.filter(e => e < diff);
        return max;
    }

    private checkAdult(age:number) {
        return age >= 18;
    }

    private getStartTime(date: Date): Date {
        const coeff = 1000 * 60 * 5;
        let now = new Date(Math.round(new Date().getTime() / coeff) * coeff)
        if (now > date) {
            return now;
        }
        return date;
    }

    private getFormatTime(date: Date): string {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        };
        return (new Intl.DateTimeFormat('de-DE', options).format(date));
    }
}
// noinspection JSUnusedGlobalSymbols
export default BookingSelection;