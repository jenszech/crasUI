import * as React from 'react';
import { Container } from 'reactstrap';
import { RouteComponentProps } from 'react-router';
import TaskList from '../components/TaskList';
import Room from '../shared/models/Room';
import { ICustomRoomInfoProps } from '../shared/interface/ICustomRoomInfoProps';

type MyState = {
  room: Room;
};

class RoomDetail extends React.Component<RouteComponentProps, MyState> {
  constructor(props: Readonly<RouteComponentProps>) {
    super(props);
    const { location } = this.props;
    const { room } = location.state as ICustomRoomInfoProps;
    this.state = {
      room,
    };
    // console.log(`RoomDetail.constructor - room => ${this.state.room.id}`);
  }

  render(): JSX.Element {
    const { room } = this.state;
    return (
      <Container>
        <TaskList room={room} />
      </Container>
    );
  }
}
export default RoomDetail;
