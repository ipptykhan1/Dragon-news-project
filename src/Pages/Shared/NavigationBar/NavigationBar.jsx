import React, { useContext } from 'react';
import { Button, ButtonGroup, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';


const NavigationBar = () => {
    const {user} = useContext(AuthContext);

    return (
        <Container>
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='text-primary' href="#home">DRAGON NEWS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
              <Link to='/'>Home</Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
           
          </Nav>
          <Nav>
           {user && <FaUserCircle style={{fontSize: '1.8rem'}}></FaUserCircle> }         
            
              {user ?
              <Button variant="secondary">Logout</Button> :
              <Link to='/login'>
              <Button variant="secondary" className='fw-bold' >Login</Button>
               </Link>
              }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </Container>
    );
};

export default NavigationBar;