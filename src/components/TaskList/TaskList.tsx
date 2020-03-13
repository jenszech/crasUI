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
import {RoutingHelper} from "../../shared/utils/RoutingHelper";
import {FormatUtils} from "../../shared/utils/FormatUtils";

const REDIRECT_TO_DETAILPAGE_TIME = 5 * 60 * 1000;

class TaskList extends Component<ICustomRoomInfoProps> {
    state = {appointments: new Array<Booking>() };
    private taskService = new TaskService();
    private date = new Date();
    private timer:any;

    componentDidMount() {
        console.log("TaskList - componentDidMount: "+this.props.room.id );
        this.taskService.loadTasks(this.props.room.id,this.updateUi);
        this.timer = setInterval(this.redirectToRoomDetail, REDIRECT_TO_DETAILPAGE_TIME);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    private updateUi = (): void => {
        this.setState({
            appointments: this.taskService.getTasks()
        });
    };

    redirectToRoomDetail = () => {
        RoutingHelper.showRoomOverview(this.props.room);
    };

    render() {
        return (
            <Fragment>
                <Container className="taskList">
                    <Row className="header">
                        <Col xs={{size: 6}}>Raum: <strong>{this.props.room.meta.room}</strong></Col>
                        <Col className="time">{FormatUtils.getFormatDayAndDate(this.date)}<br/>{FormatUtils.getFormatDayAndDate(this.date)} Uhr</Col>
                    </Row>
                    {this.state.appointments.map((appointment, index) => (
                        <Row key={index} className={this.getRowClass(appointment)} onClick={() => RoutingHelper.showBookingSelection(this.props.room, appointment, appointment.isBookable())}>
                            <Col xs={{size: 3}} className="time">{FormatUtils.getFormatTimeHHMM(appointment.startTime)} - {FormatUtils.getFormatTimeHHMM(appointment.endTime)}</Col>
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

    private getRowClass(appointment:Booking):string {
        if (appointment.blocked) {
            return "taskRow";
        } else if (this.date.getTime() > appointment.endTime.getTime()) {
            return "taskRow free";
        }
        return "taskRow free clickable";
    }
}
// noinspection JSUnusedGlobalSymbols
export default TaskList;