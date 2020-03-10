import * as React from 'react';
import { Component, Fragment } from 'react';
import { Row, Col, Container, Progress } from 'reactstrap';
import './TaskView.scss';
import {TaskService} from "../../shared/taskService";
import {Booking} from "../../shared/models/Booking";
import { ICustomRoomInfoProps} from "../../shared/interface/ICustomRoomInfoProps";
import {Room} from "../../shared/models/Room";
import history from "../../shared/history";

class TaskView extends Component<ICustomRoomInfoProps> {
    state = {
        current: new Booking(),
        next: new Booking()
    };
    private taskService = new TaskService();

    constructor(props: Readonly<ICustomRoomInfoProps>) {
        super(props);
        this.showTaskList = this.showTaskList.bind(this);
        this.showRoomMeta = this.showRoomMeta.bind(this);
    }

    componentDidMount() {
        //this.setState({post: response.data}));
        this.taskService.loadTasks(this.props.room.id, this.updateUi);
        console.log("Fetch RoomInfoPanel final: "+this.props.room.id);
    }

    private updateUi = (): void => {
        this.setState({
            current: this.taskService.getCurrentAppointment(),
            next: this.taskService.getNextAppointment()
        });
    };

    public showTaskList(room : Room) {
        console.log("Open Room: "+room.id);
        history.push({
            pathname: '/detail',
            search: '',
            state: { room: room }
        })
    }
    public showRoomMeta(room : Room) {
        console.log("Open RoomInfo: "+room.id);
        history.push({
            pathname: '/info',
            search: '',
            state: { room: room }
        })
    }

   private static getFormatTime(date: Date): string {
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
        };
        return (new Intl.DateTimeFormat('de-DE', options).format(date));
    }

    private static getRowClass(appointment : Booking|undefined):string {
        if ((appointment === undefined)||appointment.blocked) {
            return "";
        }
        return "free";
    }

    private static taskEntrie(appointment: Booking|undefined) {
        if (appointment === undefined) { return }
        return (
            <Row xs="1" className={TaskView.getRowClass(appointment)}>
                <Col
                    className="time">{TaskView.getFormatTime(appointment.startTime)} - {TaskView.getFormatTime(appointment.endTime)} </Col>
                <Col className="title">{appointment.title}</Col>
                <Col className="user">{appointment.user}</Col>
            </Row>
        );
    }
    private static progressBar(appointment: Booking|undefined) {
        let now = new Date();
        if (appointment === undefined) { return }
        if (!((appointment.startTime < now) && (appointment.endTime > now))) {return};
        let start = appointment.startTime.getHours()*60 + appointment.startTime.getMinutes();
        let actMinutes = now.getHours()*60 + now.getMinutes();
        let end = appointment.endTime.getHours()*60 + appointment.endTime.getMinutes();
        let dauer = (end-start);
        let rest = (end-actMinutes);
        let progress = 100 - ((rest / dauer) * 100)
        return (
            <Progress color="awesomer" value={progress} >Noch {rest} min.</Progress>
        );
    }

render() {
        return (
            <Fragment>
                <Container className="task">
                    {TaskView.progressBar(this.state.current)}
                    {TaskView.taskEntrie(this.state.current)}
                    {TaskView.taskEntrie(this.state.next)}
                </Container>
                <Container className="button">
                    <Row>
                        <Col className="buttonLeft" onClick={() => this.showRoomMeta(this.props.room)}>
                            &gt;&gt; Raum Informationen
                        </Col>
                        <Col className="buttonRight" onClick={() => this.showTaskList(this.props.room)}>
                            &gt;&gt; Alle Termine
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
// noinspection JSUnusedGlobalSymbols
export default TaskView;