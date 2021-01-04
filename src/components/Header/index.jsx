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
  );
}

export default Header;
