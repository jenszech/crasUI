import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Col, Container, Row } from 'reactstrap';
import SideCard from '../components/SideCard';
import TaskView from '../components/TaskView';
import { ICustomRoomInfoProps } from '../shared/interface/ICustomRoomInfoProps';

class RoomOverview extends React.Component<RouteComponentProps> {
  state = { room: (this.props.location.state as ICustomRoomInfoProps).room };

  constructor(props: Readonly<RouteComponentProps>) {
    super(props);
    console.log('RoomOverview.constructor - Room: ', this.state.room.id);
  }

  render(): JSX.Element {
    return (
      <Container>
        <Row noGutters className="pt-md-3">
          <Col
            xs={{ order: 2 }}
            md={{ size: 3, order: 1 }}
            tag="aside"
            className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
          >
            <SideCard room={this.state.room} />
          </Col>
          <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
            <TaskView room={this.state.room} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default RoomOverview;
