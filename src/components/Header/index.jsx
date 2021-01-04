import React from "react";
import "./Header.scss";
import { FaTrophy } from "react-icons/fa";
import { Navbar, Nav, Form, Button, NavDropdown } from "react-bootstrap";

function Header(props) {
  return (
    <Navbar className="navbar" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <FaTrophy /> mIO
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="/" className="ml-3">
            Home
          </Nav.Link>
          <Nav.Link href="/about" className="ml-3">
            About
          </Nav.Link>
          <Nav.Link href="/services" className="ml-3">
            Services
          </Nav.Link>
        </Nav>
          <Button  className="nav__button bg-primary text-white" href="/signin" variant="outline-primary" inline-block>
            Sign In
          </Button>
          <NavDropdown title="Vietnamese" id="basic-nav-dropdown" >
            <NavDropdown.Item>English</NavDropdown.Item>
          </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
