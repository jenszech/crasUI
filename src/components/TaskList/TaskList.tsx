import * as React from 'react';
import { uuid } from 'uuidv4';
import { Container, Row, Col } from 'reactstrap';
import './TaskList.scss';
import Booking from '../../shared/models/Booking';
import TaskService from '../../shared/taskService';
import { ICustomRoomInfoProps } from '../../shared/interface/ICustomRoomInfoProps';
import RoomNavigationButtons from '../RoomNavigationButtons/RoomNavigationButtons';
import RoutingHelper from '../../shared/utils/RoutingHelper';
import FormatUtils from '../../shared/utils/FormatUtils';

const REDIRECT_TO_DETAILPAGE_TIME = 5 * 60 * 1000;

class TaskList extends React.Component<ICustomRoomInfoProps> {
  state = { appointments: new Array<Booking>() };
  private taskService = new TaskService();
  private date = new Date();
  private timer: any;

  componentDidMount(): void {
    const { room } = this.props;
    console.log('TaskList - componentDidMount: ', room.id);
    this.taskService.loadTasks(room.id, this.updateUi);
    this.timer = setInterval(this.redirectToRoomDetail, REDIRECT_TO_DETAILPAGE_TIME);
  }
  componentWillUnmount(): void {
    clearInterval(this.timer);
  }

  private getRowClass(appointment: Booking): string {
    if (appointment.blocked) {
      return 'taskRow';
    }
    if (this.date.getTime() > appointment.endTime.getTime()) {
      return 'taskRow free';
    }
    return 'taskRow free clickable';
  }

  redirectToRoomDetail = (): void => {
    const { room } = this.props;
    RoutingHelper.showRoomOverview(room);
  };

  private updateUi = (): void => {
    this.setState({
      appointments: this.taskService.getTasks(),
    });
  };

  render(): JSX.Element {
    const { room } = this.props;
    const { appointments } = this.state;
    return (
      <React.Fragment>
        <Container className="taskList">
          <Row className="header">
            <Col xs={{ size: 6 }}>
              Raum: <strong>{room.meta.room}</strong>
            </Col>
            <Col className="time">
              {FormatUtils.getFormatDayAndDate(this.date)}
              <br />
              {FormatUtils.getFormatDayAndDate(this.date)} Uhr
            </Col>
          </Row>
          {appointments.map((appointment, index) => (
            <Row
              key={uuid()}
              className={this.getRowClass(appointment)}
              onClick={() => RoutingHelper.showBookingSelection(room, appointment, appointment.isBookable())}
            >
              <Col xs={{ size: 3 }} className="time">
                {FormatUtils.getFormatTimeHHMM(appointment.startTime)} -{' '}
                {FormatUtils.getFormatTimeHHMM(appointment.endTime)}
              </Col>
              <Col>
                <p className="title">{appointment.title}</p>
                <p className="user">{appointment.user}</p>
              </Col>
            </Row>
          ))}
          <RoomNavigationButtons page="tasklist" room={room} />
        </Container>
      </React.Fragment>
    );
  }
}
// noinspection JSUnusedGlobalSymbols
export default TaskList;
