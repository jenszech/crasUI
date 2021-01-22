import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container } from 'reactstrap';
import FloorList from '../components/FloorList';

class RoomList extends React.Component<RouteComponentProps> {
  constructor(props: Readonly<RouteComponentProps>) {
    super(props);
    console.log('RoomOverview.constructor');
  }

  render(): JSX.Element {
    return (
      <Container>
        <FloorList />
      </Container>
    );
  }
}
export default RoomList;
