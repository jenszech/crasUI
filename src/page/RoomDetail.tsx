import * as React from 'react';
import { Container } from 'reactstrap';
import { RouteComponentProps } from 'react-router';
import TaskList from '../components/TaskList';
import { ICustomRoomInfoProps } from '../shared/interface/ICustomRoomInfoProps';

class RoomDetail extends React.Component<RouteComponentProps> {
  state = { room: (this.props.location.state as ICustomRoomInfoProps).room };

  constructor(props: Readonly<RouteComponentProps>) {
    super(props);
    console.log(`RoomDetail.constructor - room => ${this.state.room.id}`);
  }

  render(): JSX.Element {
    // const { room } = this.props;
    return (
      <Container>
        <TaskList room={this.state.room} />
      </Container>
    );
  }
}
export default RoomDetail;
