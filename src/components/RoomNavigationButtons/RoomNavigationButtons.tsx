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
    const { page, room } = this.props;
    return (
      <Fragment>
        <Container className="button">
          <Row>
            {page !== 'info' && (
              <Col className="buttonLeft" onClick={() => RoutingHelper.showRoomInfo(room)}>
                &gt;&gt; Raum Informationen
              </Col>
            )}
            {page !== 'detail' && (
              <Col className="buttonLeft" onClick={() => RoutingHelper.showRoomOverview(room)}>
                &gt;&gt; Raum Details
              </Col>
            )}
            {page !== 'tasklist' && (
              <Col className="buttonRight" onClick={() => RoutingHelper.showRoomDetail(room)}>
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
