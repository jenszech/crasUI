import * as React from 'react';
import { Component, Fragment } from 'react';
import { Row, Col, Container, Progress } from 'reactstrap';
import './TaskView.scss';
import {TaskService} from "../../shared/taskService";
import {Booking} from "../../shared/models/Booking";
import { ICustomRoomInfoProps} from "../../shared/interface/ICustomRoomInfoProps";
import {Room} from "../../shared/models/Room";
import RoomNavigationButtons from "../RoomNavigationButtons/RoomNavigationButtons";
import {RoutingHelper} from "../../shared/utils/RoutingHelper";
import {FormatUtils} from "../../shared/utils/FormatUtils";

const RELOAD_TASK_TIMER = 5 * 60 * 1000;

class TaskView extends Component<ICustomRoomInfoProps> {
    state = {
        current: new Booking(),
        next: new Booking()
    };
    private taskService = new TaskService();
    private timer:any;

    componentDidMount() {
        this.getData();
        this.timer = setInterval(this.getData, RELOAD_TASK_TIMER);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    getData = () => {
        this.taskService.loadTasks(this.props.room.id, this.updateUi);
        console.log("Taskview.getData - Room: " + this.props.room.id);
    };

    private updateUi = (): void => {
        this.setState({
            current: this.taskService.getCurrentAppointment(),
            next: this.taskService.getNextAppointment()
        });
    };

    private static getRowClass(appointment : Booking|undefined):string {
        if ((appointment === undefined)||appointment.blocked) {
            return "";
        }
        return "free";
    }

    private static taskEntrie(room: Room, appointment: Booking|undefined, isBookable: boolean) {
        if (appointment === undefined) { return }
        return (
            <Row xs="1" className={TaskView.getRowClass(appointment)} onClick={() => RoutingHelper.showBookingSelection(room, appointment, isBookable)}>
                <Col
                    className="time">{FormatUtils.getFormatTimeHHMM(appointment?.startTime)} - {FormatUtils.getFormatTimeHHMM(appointment.endTime)} </Col>
                <Col className="title">{appointment.title}</Col>
                <Col className="user">{appointment.user}</Col>
            </Row>
        );
    }
    private static progressBar(appointment: Booking|undefined) {
        if ((appointment === undefined) || !appointment.blocked) return "";
        let now = new Date();
        if (!((appointment.startTime < now) && (appointment.endTime > now))) {return}
        let start = appointment.startTime.getHours()*60 + appointment.startTime.getMinutes();
        let actMinutes = now.getHours()*60 + now.getMinutes();
        let end = appointment.endTime.getHours()*60 + appointment.endTime.getMinutes();
        let dauer = (end-start);
        let rest = (end-actMinutes);
        let progress = 100 - ((rest / dauer) * 100);
        return (
            <Progress color="awesomer" value={progress} >Noch {rest} min.</Progress>
        );
    }

    render() {
        return (
            <Fragment>
                <Container className="task">
                    {TaskView.progressBar(this.state.current)}
                    {TaskView.taskEntrie(this.props.room, this.state.current, this.state.current?.isBookable())}
                    {TaskView.taskEntrie(this.props.room, this.state.next, this.state.next?.isBookable())}
                </Container>
                <RoomNavigationButtons page="detail" room={this.props.room}/>
            </Fragment>
        );
    }
}
// noinspection JSUnusedGlobalSymbols
export default TaskView;