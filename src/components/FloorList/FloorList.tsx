import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RoomInfoBox from '../RoomInfoBox';
import './FloorList.scss';
import RoomService from '../../shared/roomService';

class FloorList extends React.Component {
  state = { floors: [], rooms: [] };
  private roomsService = new RoomService();

  componentDidMount(): void {
    console.log('FloorList.componentDidMount');
    this.roomsService.loadRooms(this.updateUi);
  }

  private updateUi = (): void => {
    this.setState({
      rooms: this.roomsService.getRooms(),
      floors: Array.from(this.roomsService.getFloors()),
    });
  };

  render(): JSX.Element {
    return (
      <React.Fragment>
        <Container className="floorlist">
          <Row className="header">
            <Col xs={{ size: 1 }}>Etage</Col>
            <Col>Räume</Col>
          </Row>
          {this.state.floors.map((floor) => (
            <Row key={floor} className="floorRow">
              <Col xs={{ size: 1 }}>{floor}</Col>
              <Col>
                <Container>
                  <Row>
                    {this.roomsService.getRoomByFloor(floor)?.map((room) => (
                      <Col key={room.id}>
                        <RoomInfoBox room={room} />
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Col>
            </Row>
          ))}
        </Container>
      </React.Fragment>
    );
  }
}
// noinspection JSUnusedGlobalSymbols
export default FloorList;
