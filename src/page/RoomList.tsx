import * as React from 'react';
import { Container} from "reactstrap";
import FloorList from "../components/FloorList";


const roomList = () => {
    return (
        <Container>
            <FloorList/>
        </Container>
    );
}

export default roomList;