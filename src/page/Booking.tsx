import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container } from 'reactstrap';
import BookingSelection from '../components/BookingSelection';
import { ICustomRoomBookProps } from '../shared/interface/ICustumRoomBookProps';

class Booking extends React.Component<RouteComponentProps> {
  state = {
    room: (this.props.location.state as ICustomRoomBookProps).room,
    appointment: (this.props.location.state as ICustomRoomBookProps).appointment,
  };

  constructor(props: Readonly<RouteComponentProps>) {
    super(props);
    console.log('Booking.constructor - room => ', this.state.room.id);
  }

  render(): JSX.Element {
    return (
      <Container>
        <BookingSelection room={this.state.room} appointment={this.state.appointment} />
      </Container>
    );
  }
}
export default Booking;
