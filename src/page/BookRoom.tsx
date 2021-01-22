import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container } from 'reactstrap';
import BookingSelection from '../components/BookingSelection';
import { ICustomRoomBookProps } from '../shared/interface/ICustumRoomBookProps';
import Room from '../shared/models/Room';
import Booking from '../shared/models/Booking';

type MyState = {
  room: Room;
  appointment: Booking;
};

class BookRoom extends React.Component<RouteComponentProps, MyState> {
  constructor(props: Readonly<RouteComponentProps>) {
    super(props);
    const { location } = this.props;
    const { room, appointment } = location.state as ICustomRoomBookProps;
    this.state = {
      room,
      appointment,
    };
    // console.log('Booking.constructor - room => ', this.state.room.id);
  }

  render(): JSX.Element {
    const { room, appointment } = this.state;
    return (
      <Container>
        <BookingSelection room={room} appointment={appointment} />
      </Container>
    );
  }
}
export default BookRoom;
