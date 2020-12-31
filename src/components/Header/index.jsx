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
          <NavDropdown title="Product" id="basic-nav-dropdown" className="ml-3">
            <NavDropdown.Item href="#action/3.1">Product 01</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Product 02</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Product 03</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form>
          <Button href="/sign-up" variant="outline-success" block>
            Sign Up
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
