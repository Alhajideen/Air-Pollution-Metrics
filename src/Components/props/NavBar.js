import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../imgs/logo.PNG';
import '../../styles/nav-banner.css';

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid className="container">
          <Navbar.Brand>
            <Link to={'/'}>
              <img src={Logo} alt="Site logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 nav-links"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to={'/'}>
                <Nav.Link href="#action1">Home</Nav.Link>
              </Link>
              <Link to={'/'}>
                <Nav.Link href="#action2">Contact Us</Nav.Link>
              </Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success">Sign-Up</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
