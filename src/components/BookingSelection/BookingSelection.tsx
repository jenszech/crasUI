import * as React from 'react';
import { uuid } from 'uuidv4';
import { Container, Row, Col } from 'reactstrap';
import './BookingSelection.scss';
import RoomNavigationButtons from '../RoomNavigationButtons/RoomNavigationButtons';
import { ICustomRoomBookProps } from '../../shared/interface/ICustumRoomBookProps';
import Room from '../../shared/models/Room';
import TaskService from '../../shared/taskService';
import FormatUtils from '../../shared/utils/FormatUtils';
import RoutingHelper from '../../shared/utils/RoutingHelper';

class BookingSelection extends React.Component<ICustomRoomBookProps> {
  private taskService = new TaskService();
  durations = [15, 30, 45, 60, 75, 90, 105, 120];
  maxDurations: Array<number> = [];
  date = new Date();
  start: Date;
  room: Room;

  constructor(props: Readonly<ICustomRoomBookProps>) {
    super(props);
    const { appointment } = this.props;
    const { room } = this.props;
    this.maxDurations = this.getMaxDuration(this.getStartTime(appointment.startTime), appointment.endTime);
    this.start = appointment.startTime;
    this.room = room;
  }

  private getMaxDuration(start: Date, end: Date): Array<number> {
    const diff = (end.getTime() - start.getTime()) / 60000;
    return this.durations.filter((e) => e <= diff);
  }

  private getOptionColClass(duration: number) {
    if (this.maxDurations.includes(duration)) {
      return 'enabled';
    }
    return 'disabled';
  }

  private getStartTime(start: Date): Date {
    const coeff = 1000 * 60 * 5;
    const now = new Date(Math.round(this.date.getTime() / coeff) * coeff);
    if (now > start) {
      return now;
    }
    return start;
  }

  doBooking = (room: Room, start: Date, duration: number): void => {
    if (this.isBookable(duration)) {
      console.log('BookingSelection.doBooking - book: ', room.id, duration, start);
      this.taskService.storeTasks(room.id, start, duration, this.bookingDone);
    }
  };

  bookingDone = (): void => {
    console.log('BookingSelection.bookingDone - room: ', this.room.id);
    RoutingHelper.showRoomOverview(this.room);
  };

  private isBookable(duration: number): boolean {
    return this.maxDurations.includes(duration);
  }

  render(): JSX.Element {
    return (
      <React.Fragment>
        <Container className="book">
          <Row className="bookRow">
            <Col xs={{ size: 1 }}>Raum</Col>
            <Col>{this.room.meta.room}</Col>
          </Row>
          <Row className="bookRow">
            <Col xs={{ size: 1 }}>Start</Col>
            <Col>{FormatUtils.getFormatTimeHHMM(this.start)} Uhr</Col>
          </Row>
          <Row key="1" className="bookRow">
            <Col xs={{ size: 1 }}>Dauer</Col>
            <Col>
              <Container className="bookOptions">
                <Row xs="5">
                  {this.durations.map((duration) => (
                    <Col
                      key={uuid()}
                      className={this.getOptionColClass(duration)}
                      onClick={() => this.doBooking(this.room, this.start, duration)}
                    >
                      {duration}
                    </Col>
                  ))}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <RoomNavigationButtons page="info" room={this.room} />
      </React.Fragment>
    );
  }
}
// noinspection JSUnusedGlobalSymbols
export default BookingSelection;
