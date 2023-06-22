import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, ButtonGroup, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center'>
            <div>
               <img src={logo} />
               <p>Journalism Without Fear or Favour</p>
               <p>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='container d-flex'>
                <Button className='btn-danger btn'>Latest</Button>
                <Marquee className='bg-secondary text-white' speed={100}>
                I can be a React component, multiple React components, or just some text...I can be a React component, multiple React components, or just some text.....I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='text-primary' href="#home">DRAGON NEWS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link to='/'>Home</Link>
              </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
           
          </Nav>
          <Nav>
           
            <Nav.Link eventKey={2} href="#memes">
              <ButtonGroup className='fw-bold' >Login</ButtonGroup>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;