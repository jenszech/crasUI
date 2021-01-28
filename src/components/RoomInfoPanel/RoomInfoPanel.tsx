import * as React from 'react';
import { Component, Fragment } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './RoomInfoPanel.scss';
import { ICustomRoomInfoProps } from '../../shared/interface/ICustomRoomInfoProps';
import MetaIconDetail from '../MetaIconDetail/MetaIconDetail';
import RoutingHelper from '../../shared/utils/RoutingHelper';
import AusstattungType from '../../shared/models/AusstattungType';

const REDIRECT_TO_DETAILPAGE_TIME = 1 * 60 * 1000;

class RoomInfoPanel extends Component<ICustomRoomInfoProps> {
  private timer: NodeJS.Timeout | undefined;

  componentDidMount(): void {
    this.timer = setInterval(this.redirectToRoomDetail, REDIRECT_TO_DETAILPAGE_TIME);
  }
  componentWillUnmount(): void {
    if (this.timer !== undefined) {
      clearInterval(this.timer);
    }
  }

  redirectToRoomDetail = (): void => {
    const { room } = this.props;
    RoutingHelper.showRoomOverview(room);
  };

  render(): JSX.Element {
    const { room } = this.props;
    return (
      <Fragment>
        <Container className="roomInfoPanel">
          <Row xs="2">
            <Col className="title" xs={{ size: 3 }}>
              Ort
            </Col>
            <Col className="info" xs={{ size: 7 }}>
              {room.meta.etage}
            </Col>
          </Row>
          <Row xs="2">
            <Col className="title" xs={{ size: 3 }}>
              Sitzplätze
            </Col>
            <Col className="info" xs={{ size: 7 }}>
              {room.meta.plaetze}
            </Col>
          </Row>
          <Row xs="2">
            <Col className="title" xs={{ size: 3 }}>
              Telephon
            </Col>
            <Col className="info" xs={{ size: 7 }}>
              {room.meta.tel}
            </Col>
          </Row>
          <Row xs="2">
            <Col className="title" xs={{ size: 3 }}>
              Link
            </Col>
            <Col className="info" xs={{ size: 7 }}>
              <a href={room.meta.link}>{room.meta.link}</a>
            </Col>
          </Row>
          <Row xs="2">
            <Col className="title" xs={{ size: 3 }}>
              Ausstattung
            </Col>
            <Col className="info">
              {room.meta.ausstattung?.map((ausstattung: AusstattungType) => (
                <MetaIconDetail key={ausstattung} icon={ausstattung} />
              ))}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
// noinspection JSUnusedGlobalSymbols
export default RoomInfoPanel;
