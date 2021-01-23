import * as React from 'react';
import { Component, Fragment } from 'react';
import { Row, Col, Container, Progress } from 'reactstrap';
import './TaskView.scss';
import TaskService from '../../shared/taskService';
import Booking from '../../shared/models/Booking';
import { ICustomRoomInfoProps } from '../../shared/interface/ICustomRoomInfoProps';
import IStateTaskView from '../../shared/interface/IStateTaskView';
import Room from '../../shared/models/Room';
import RoomNavigationButtons from '../RoomNavigationButtons/RoomNavigationButtons';
import RoutingHelper from '../../shared/utils/RoutingHelper';
import FormatUtils from '../../shared/utils/FormatUtils';

const RELOAD_TASK_TIMER = 5 * 60 * 1000;

class TaskView extends Component<ICustomRoomInfoProps, IStateTaskView> {
  private taskService: TaskService;
  private timer: any;

  constructor(props: ICustomRoomInfoProps) {
    super(props);
    this.state = {
      current: new Booking(),
      next: new Booking(),
    };
    this.taskService = new TaskService();
  }

  componentDidMount(): void {
    this.getData();
    this.timer = setInterval(this.getData, RELOAD_TASK_TIMER);
  }
  componentWillUnmount(): void {
    clearInterval(this.timer);
  }

  getData = (): void => {
    const { room } = this.props;
    this.taskService.loadTasks(room.id, this.updateUi);
    console.log('Taskview.getData - Room: ', room.id);
  };

  private updateUi = (): void => {
    this.setState({
      current: this.taskService.getCurrentAppointment(),
      next: this.taskService.getNextAppointment(),
    });
  };

  // eslint-disable-next-line react/sort-comp
  private static taskEntrie(
    room: Room,
    appointment: Booking | undefined,
    isBookable: boolean | undefined,
  ): JSX.Element | null {
    if (appointment === undefined) {
      return null;
    }
    let isBookableInt = false;
    if (isBookable !== undefined) {
      isBookableInt = false;
    }
    return (
      <Row
        xs="1"
        className={TaskView.getRowClass(appointment)}
        onClick={() => RoutingHelper.showBookingSelection(room, appointment, isBookableInt)}
      >
        <Col className="time">
          {FormatUtils.getFormatTimeHHMM(appointment?.startTime)} - {FormatUtils.getFormatTimeHHMM(appointment.endTime)}{' '}
        </Col>
        <Col className="title">{appointment.title}</Col>
        <Col className="user">{appointment.user}</Col>
        {appointment.blocked && (
          <Col className="link">
            <a href={room.meta.link}>{room.meta.link}</a>
          </Col>
        )}
      </Row>
    );
  }

  private static progressBar(appointment: Booking | undefined): JSX.Element | null {
    if (appointment === undefined || !appointment.blocked) return null;
    const now = new Date();
    if (!(appointment.startTime < now && appointment.endTime > now)) {
      return null;
    }
    const start = appointment.startTime.getHours() * 60 + appointment.startTime.getMinutes();
    const actMinutes = now.getHours() * 60 + now.getMinutes();
    const end = appointment.endTime.getHours() * 60 + appointment.endTime.getMinutes();
    const dauer = end - start;
    const rest = end - actMinutes;
    const progress = 100 - (rest / dauer) * 100;
    return (
      <Progress color="awesomer" value={progress}>
        Noch {rest} min.
      </Progress>
    );
  }

  private static getRowClass(appointment: Booking | undefined): string {
    if (appointment === undefined || appointment.blocked) {
      return '';
    }
    return 'free';
  }

  render() {
    const { room } = this.props;
    const { current, next } = this.state;
    return (
      <Fragment>
        <Container className="task">
          {TaskView.progressBar(current)}
          {TaskView.taskEntrie(room, current, current?.isBookable())}
          {TaskView.taskEntrie(room, next, next?.isBookable())}
        </Container>
        <RoomNavigationButtons page="detail" room={room} />
      </Fragment>
    );
  }
}
// noinspection JSUnusedGlobalSymbols
export default TaskView;
