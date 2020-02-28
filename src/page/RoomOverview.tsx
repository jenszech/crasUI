import * as React from 'react';
import {Col, Container, Row} from "reactstrap";
import SideCard from "../components/SideCard";
import Post from "../components/Post";

const roomOverview = () => {
    return (
        <Container>
            <Row noGutters className="pt-md-3">

                <Col xs={{ order: 2 }} md={{ size: 3, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
                    <SideCard />
                </Col>

                <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
                    <Post />
                </Col>

            </Row>
        </Container>
    );
};

export default roomOverview;