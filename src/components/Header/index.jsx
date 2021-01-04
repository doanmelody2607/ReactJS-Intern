<<<<<<< HEAD
import React, { useState } from "react";
import "./Header.scss";
import { SiMercedes } from "react-icons/si";
import { Navbar, Nav, Form, Button, NavDropdown } from "react-bootstrap";
import AboutUs from "../Modal";

function Header(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar className="navbar" variant="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">
          <SiMercedes /> Mercedes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/" className="ml-3">
              Home
            </Nav.Link>
            <Nav.Link
              href="#"
              className="ml-3"
              onClick={() => setModalShow(true)}
            >
              About
            </Nav.Link>
            <Nav.Link href="/services" className="ml-3">
              Services
            </Nav.Link>
          </Nav>
          <Form>
            <Button href="/sign-in" variant="outline-dark" block>
              Sign In
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <AboutUs show={modalShow} onHide={() => setModalShow(false)} />
    </>
=======
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
>>>>>>> da70d5d7f78175deba5e50d37b87b7f99ac7528f
  );
}

export default Header;
