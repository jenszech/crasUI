import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { RouteComponentProps } from 'react-router';
import SideCard from '../components/SideCard';
import { ICustomRoomInfoProps } from '../shared/interface/ICustomRoomInfoProps';
import RoomInfoPanel from '../components/RoomInfoPanel/RoomInfoPanel';
import RoomNavigationButtons from '../components/RoomNavigationButtons/RoomNavigationButtons';
import Room from '../shared/models/Room';

type MyState = {
  room: Room;
};

class RoomOverview extends React.Component<RouteComponentProps, MyState> {
  constructor(props: Readonly<RouteComponentProps>) {
    super(props);
    const { location } = this.props;
    const { room } = location.state as ICustomRoomInfoProps;
    this.state = {
      room,
    };
    // console.log(`RoomOverview.constructor - room => ${this.state.room.id}`);
  }

  render(): JSX.Element {
    const { room } = this.state;
    return (
      <Container>
        <Row noGutters className="pt-md-3">
          <Col
            xs={{ order: 2 }}
            md={{ size: 3, order: 1 }}
            tag="aside"
            className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
          >
            <SideCard room={room} />
          </Col>

          <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
            <RoomInfoPanel room={room} />
            <RoomNavigationButtons page="info" room={room} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default RoomOverview;
