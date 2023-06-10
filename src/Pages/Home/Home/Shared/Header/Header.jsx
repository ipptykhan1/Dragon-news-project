import React from 'react';
import logo from '../../../../../assets/logo.png';
import moment from 'moment';
import Marquee from 'react-fast-marquee';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <Container>
           <div className='text-center'>
            <img src={logo} />
            <p className='text-secondary'> <small> Journalism without fear or favour</small></p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
           </div>
           <div className='d-flex'>
           <Button variant="danger"> Latest </Button>
            <Marquee className='text-danger' speed={100}>
            I can be a React component, multiple React components, or just some text... I can be a React component, multiple React components, or just some text.
            </Marquee>
           </div>

           <Navbar bg="light" expand="lg">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto ">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Career</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
          <Nav.Link className='ml-5' href="#action2">Profile </Nav.Link>
            <Button variant="secondary">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </Container>
    );
};

export default Header;