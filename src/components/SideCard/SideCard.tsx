import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ICustomRoomInfoProps } from '../../shared/interface/ICustomRoomInfoProps';
import './SideCard.scss';
import FormatUtils from '../../shared/utils/FormatUtils';

const BANNER_PATH = './roomImages/';

class SideCard extends React.Component<ICustomRoomInfoProps> {
  private date = new Date();

  getImagePath(): string {
    const { room } = this.props;
    return `${BANNER_PATH}${room.id}.jpg`;
  }
  render(): JSX.Element {
    const { room } = this.props;
    return (
      <React.Fragment>
        <Container className="sidecard">
          <Row xs="1">
            <Col className="room-name">
              Raum:
              <br />
              <strong>{room.meta.room}</strong>
            </Col>
            <Col className="room-image">
              <img width="100%" src={this.getImagePath()} alt="{this.props.room.meta.room}" />
            </Col>
            <Col className="room-desc">{room.meta.description}</Col>
            <Col className="current-date">
              {FormatUtils.getFormatWeekday(this.date)}, {FormatUtils.getFormatTimeHHMM(this.date)} Uhr
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
// noinspection JSUnusedGlobalSymbols
export default SideCard;
