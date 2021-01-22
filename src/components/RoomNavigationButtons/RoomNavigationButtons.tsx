import * as React from 'react';
import { Component, Fragment } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './RoomNavigationButtons.scss';
import Room from '../../shared/models/Room';
import RoutingHelper from '../../shared/utils/RoutingHelper';

export interface ICustomRoomButtonProps {
  page: string;
  room: Room;
}

class RoomNavigationButtons extends Component<ICustomRoomButtonProps> {
  render(): JSX.Element {
    return (
      <Fragment>
        <Container className="button">
          <Row>
            {this.props.page !== 'info' && (
              <Col className="buttonLeft" onClick={() => RoutingHelper.showRoomInfo(this.props.room)}>
                &gt;&gt; Raum Informationen
              </Col>
            )}
            {this.props.page !== 'detail' && (
              <Col className="buttonLeft" onClick={() => RoutingHelper.showRoomOverview(this.props.room)}>
                &gt;&gt; Raum Details
              </Col>
            )}
            {this.props.page !== 'tasklist' && (
              <Col className="buttonRight" onClick={() => RoutingHelper.showRoomDetail(this.props.room)}>
                &gt;&gt; Alle Termine anzeigen
              </Col>
            )}
          </Row>
        </Container>
      </Fragment>
    );
  }
}
// noinspection JSUnusedGlobalSymbols
export default RoomNavigationButtons;
