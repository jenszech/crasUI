import * as React from 'react';
import {Fragment} from 'react';

import {
    Container, Row, Col,
} from 'reactstrap';
import './TaskList.scss';
import {Component} from "react";
import {Booking} from "../../shared/models/Booking";
import {TaskService} from "../../shared/taskService";
import { ICustomRoomInfoProps} from "../../shared/interface/ICustomRoomInfoProps";
import RoomNavigationButtons from "../RoomNavigationButtons/RoomNavigationButtons";
import {Room} from "../../shared/models/Room";
import history from "../../shared/history";

class TaskList extends Component<ICustomRoomInfoProps> {
    state = {appointments: new Array<Booking>() };
    private taskService = new TaskService();
    private date = new Date();

    componentDidMount() {
        this.taskService.loadTasks(this.props.room.id,this.updateUi);
        console.log("Fetch Tasklist final: "+this.props.room.id );
    }

    private updateUi = (): void => {
        this.setState({
            appointments: this.taskService.getTasks()
        });
    };

    public showBookingSelection(room : Room, appointment: Booking) {
        if (!appointment.blocked) {
            console.log("Open BookingSelection: " + room.id);
            history.push({
                pathname: '/booking',
                search: '',
                state: {
                    room: room,
                    appointment: appointment
                }
            })
        }
    }

    render() {
        return (
            <Fragment>
                <Container className="taskList">
                    <Row className="header">
                        <Col xs={{size: 6}}>Raum: <strong>{this.props.room.meta.room}</strong></Col>
                        <Col className="time">{this.getFormatDate(this.date)}<br/>{this.getFormatTime(this.date)} Uhr</Col>
                    </Row>
                    {this.state.appointments.map((appointment, index) => (
                        <Row key={index} className={this.getRowClass(appointment.blocked)} onClick={() => this.showBookingSelection(this.props.room, appointment)}>
                            <Col xs={{size: 3}} className="time">{this.getFormatTime(appointment.startTime)} - {this.getFormatTime(appointment.endTime)}</Col>
                            <Col>
                                <p className="title">{appointment.title}</p>
                                <p className="user">{appointment.user}</p>
                            </Col>
                        </Row>
                    ))}
                    <RoomNavigationButtons page="tasklist" room={this.props.room}/>
                </Container>
            </Fragment>
        );
    }

    private getFormatTime(date: Date): string {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        };
        return (new Intl.DateTimeFormat('de-DE', options).format(date));
    }
    private getFormatDate(date: Date): string {
        const options = {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
        };
        return (new Intl.DateTimeFormat('de-DE', options).format(date));
    }

    private getRowClass(isBlocked :boolean):string {
        if (isBlocked) {
            return "taskRow";
        }
        return "taskRow free";
    }
}
// noinspection JSUnusedGlobalSymbols
export default TaskList;