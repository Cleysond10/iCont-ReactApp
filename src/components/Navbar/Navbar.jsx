import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

export default function index() {
  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Navbar.Brand href="/">iCount</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/counter">Counter</Nav.Link>
          <Nav.Link className="navLink" href="/bonus">Bonus</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
