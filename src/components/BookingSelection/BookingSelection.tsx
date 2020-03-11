import * as React from 'react';
import {Fragment} from 'react';
import {
    Container, Row, Col,
} from 'reactstrap';
import './BookingSelection.scss';
import {Component} from "react";
import RoomNavigationButtons from "../RoomNavigationButtons/RoomNavigationButtons";
import {ICustomRoomBookProps} from "../../shared/interface/ICustumRoomBookProps";
import {Room} from "../../shared/models/Room";
import {TaskService} from "../../shared/taskService";

class BookingSelection extends Component<ICustomRoomBookProps> {
    private taskService = new TaskService();
    durations = [15, 30, 45, 60, 75, 90, 105, 120];
    maxDurations: Array<number> = [] ;
    date = new Date();
    start = this.getStartTime(this.props.appointment.startTime);
    room = this.props.room;

    constructor(props: Readonly<ICustomRoomBookProps>) {
        super(props);
        this.maxDurations = this.getMaxDuration(
            this.getStartTime(this.props.appointment.startTime), this.props.appointment.endTime
        );
        this.doBooking = this.doBooking.bind(this);
        this.showRoomDetail = this.showRoomDetail.bind(this);
    }

    public doBooking(room: Room, start: Date, duration: number) {
        if (this.isBookable(duration)) {
            console.log("Do Booking: " + room.id, duration, start);
            this.taskService.storeTasks(room.id, start,duration, this.showRoomDetail);
        }
    }

    public showRoomDetail() {
        console.log("Open showRoomDetail: "+this.room.id);

        /*history.push({
            pathname: '/detail',
            search: '',
            state: {
                room: room
            }
        })
        */
    }

    render() {
        return (
            <Fragment>
                <Container className="book">
                    <Row className="bookRow">
                        <Col xs={{size: 1}}>Start</Col>
                        <Col>{this.getFormatTime(this.start)} Uhr</Col>
                    </Row>
                    <Row key="1" className="bookRow">
                        <Col xs={{size: 1}}>Dauer</Col>
                        <Col>
                            <Container className="bookOptions">
                            <Row xs="5">
                                {this.durations.map((duration, index) => (
                                    <Col key={index}
                                         className={this.getOptionColClass(index, duration)}
                                         onClick={() => this.doBooking(
                                             this.props.room, this.start, duration)
                                         }>
                                        {duration}
                                    </Col>
                                ))}
                            </Row>
                            </Container>

                        </Col>
                    </Row>
                </Container>
                <RoomNavigationButtons page="info" room={this.props.room}/>
            </Fragment>
        );
    }

    private isBookable(duration:number):boolean {
        return this.maxDurations.includes(duration);
    }


    private getMaxDuration(start: Date, end: Date): Array<number> {
        let diff = (end.getTime() - start.getTime()) / 60000;
        var max = this.durations.filter(e => e <= diff);
        return max;
    }

    private getOptionColClass(index: number, duration:number) {
        if (this.maxDurations.includes(duration)) {
            return "enabled"
        }
        return "disabled";
    }


    private getStartTime(start: Date): Date {
        const coeff = 1000 * 60 * 5;
        let now = new Date(Math.round(this.date.getTime() / coeff) * coeff)
        if (now > start) {
            return now;
        }
        return start;
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