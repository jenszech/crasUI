import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RoomInfoBox from '../RoomInfoBox';
import './FloorList.scss';
import RoomService from '../../shared/roomService';
import IStateFloorlist from '../../shared/interface/IStateFloorList';
import Room from '../../shared/models/Room';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IPropsEmpty {}

class FloorList extends React.Component<IPropsEmpty, IStateFloorlist> {
  private roomsService: RoomService;

  constructor(props: IPropsEmpty) {
    super(props);
    this.state = {
      floors: [],
      rooms: new Map<string, Array<Room>>(),
    };
    this.roomsService = new RoomService();
  }

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
    const { floors } = this.state;
    return (
      <React.Fragment>
        <Container className="floorlist">
          <Row className="header">
            <Col xs={{ size: 1 }}>Etage</Col>
            <Col>Räume</Col>
          </Row>
          {floors.map((floor) => (
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
