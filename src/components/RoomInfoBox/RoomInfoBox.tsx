import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './RoomInfoBox.scss';
import MetaIcon from '../MetaIcon';
import { ICustomRoomInfoProps } from '../../shared/interface/ICustomRoomInfoProps';
import RoutingHelper from '../../shared/utils/RoutingHelper';
import AusstattungType from '../../shared/models/AusstattungType';

class RoomInfoBox extends React.Component<ICustomRoomInfoProps> {
  render(): JSX.Element {
    return (
      <React.Fragment>
        <Container className="roomInfoBox" onClick={() => RoutingHelper.showRoomOverview(this.props.room)}>
          <Row xs="1">
            <Col className="room-name">{this.props.room.meta.room}</Col>
            <Col className="room-desc">{this.props.room.meta.plaetze} Personen</Col>
            <Col className="room-meta">
              {this.props.room.meta.ausstattung?.map((ausstattung: AusstattungType) => (
                <MetaIcon key={ausstattung} icon={ausstattung} />
              ))}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
// noinspection JSUnusedGlobalSymbols
export default RoomInfoBox;
