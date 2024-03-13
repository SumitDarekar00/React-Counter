import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function CustomNavbar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">MY-APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/counter">Counter</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default CustomNavbar;
