import React from 'react';
import Header from '../Pages/Home/Home/Shared/Header/Header';
import Footer from '../Pages/Home/Home/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Home/Home/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Home/Home/Shared/RightNAv/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
      <Row>
        <Col lg={3}> <LeftNav></LeftNav> </Col>
        <Col lg={6}> <h3> Main container comming...</h3></Col>
        <Col lg={3}> <RightNav></RightNav> </Col>
      </Row>
    </Container>

            <Footer></Footer>
        </div>
    );
};

export default Main;