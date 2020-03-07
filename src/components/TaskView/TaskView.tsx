import * as React from 'react';
import { Component, Fragment } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './TaskView.scss';
import {TaskService} from "../../shared/taskService";
import {Booking} from "../../shared/models/Booking";
import { CustomRoomInfoProps} from "../../shared/interface/CustomRoomInfoProps";

class TaskView extends Component<CustomRoomInfoProps> {
    state = {
        current: new Booking(),
        next: new Booking()
    };
    private taskService = new TaskService();

    componentDidMount() {
        //this.setState({post: response.data}));
        this.taskService.loadTasks("Raum_Gutenberg@tde.thalia.de",this.updateUi);
        console.log("Fetch TaskView final: "+this.props.room.id);
    }

    private updateUi = (): void => {
        this.setState({
            current: this.taskService.getCurrentAppointment(),
            next: this.taskService.getNextAppointment()
        });
    };

    private getFormatTime(date: Date): string {
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
        };
        return (new Intl.DateTimeFormat('de-DE', options).format(date));
    }

    private getRowClass(appointment : Booking|undefined):string {
        if ((appointment === undefined)||(appointment.blocked=== true)) {
            return "";
        }
        return "free";
    }

    private taskEntrie(appointment: Booking|undefined) {
        if (appointment === undefined) { return }
        return (
            <Row xs="1" className={this.getRowClass(appointment)}>
                <Col
                    className="time">{this.getFormatTime(appointment.startTime)} - {this.getFormatTime(appointment.endTime)} </Col>
                <Col className="title">{appointment.title}</Col>
                <Col className="user">{appointment.user}</Col>
            </Row>
        );
    }

render() {
        return (
            <Fragment>
                <Container className="task">
                    {this.taskEntrie(this.state.current)}
                    {this.taskEntrie(this.state.next)}
                </Container>
                <Container className="button">
                    <Row>
                        <Col className="buttonLeft">&gt;&gt; Raum Informationen</Col>
                        <Col className="buttonRight">&gt;&gt; Alle Termine</Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
// noinspection JSUnusedGlobalSymbols
export default TaskView;