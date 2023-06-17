import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Row>
            <Col> <LeftNav></LeftNav> </Col>
            <Col> </Col>
            <Col> <RightNav> </RightNav> </Col>
            </Row>
            </Container>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;