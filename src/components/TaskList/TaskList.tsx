import * as React from 'react';
import {Fragment} from 'react';

import {
    Container, Row, Col,
} from 'reactstrap';
import './TaskList.scss';
import {Component} from "react";
import {Booking} from "../../shared/models/Booking";
import {TaskService} from "../../shared/taskService";
import { CustomRoomInfoProps} from "../../shared/interface/CustomRoomInfoProps";

class TaskList extends Component<CustomRoomInfoProps> {
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

    render() {
        return (
            <Fragment>
                <Container className="taskList">
                    <Row className="header">
                        <Col xs={{size: 6}}>Raum: <strong>{this.props.room.meta.room}</strong></Col>
                        <Col className="time">{this.getFormatDate(this.date)}<br/>{this.getFormatTime(this.date)} Uhr</Col>
                    </Row>
                    {this.state.appointments.map((appointment, index) => (
                        <Row key={index} className={this.getRowClass(appointment.blocked)}>
                            <Col xs={{size: 3}} className="time">{this.getFormatTime(appointment.startTime)} - {this.getFormatTime(appointment.endTime)}</Col>
                            <Col>
                                <p className="title">{appointment.title}</p>
                                <p className="user">{appointment.user}</p>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </Fragment>
        );
    }
}
// noinspection JSUnusedGlobalSymbols
export default TaskList;