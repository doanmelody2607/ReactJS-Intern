import React, { useState } from "react";
import { Button, Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { SiMercedes } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import AboutUs from "../Modal";
import "./Header.scss";

function Header(props) {
  const [modalShow, setModalShow] = useState(false);
  const isCheckSignIn = useSelector((state) => state.user.isCheckSignIn);
  const getUser = useSelector((state) => state.user.initialUser);
  const user = localStorage.getItem("user") ? JSON.parse(getUser) : getUser;

  console.log();

  function handleClickLogout() {
    localStorage.removeItem("isCheck");
    window.location.reload(false);
  }
  return (
    <>
      <Navbar className="navbar" variant="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">
          <SiMercedes /> Mercedes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="ml-3">
              Home
            </Nav.Link>
            <Nav.Link
              href=""
              className="ml-3"
              onClick={() => setModalShow(true)}
            >
              About
            </Nav.Link>
            <Nav.Link href="/services" className="ml-3">
              Services
            </Nav.Link>
          </Nav>
          {isCheckSignIn ? (
            <div className="d-flex align-items-center">
              <div className="username-logan mr-2">{user[0].name}</div>
              <FaUserCircle className="mr-2" />
              <div className="navbar__user-logout" onClick={handleClickLogout}>
                Log out
              </div>
            </div>
          ) : (
            <Button
              className="nav__button bg-primary text-white"
              href="/signin"
              variant="outline-primary"
              inline-block
            >
              Sign In
            </Button>
          )}

          <Nav className="ml-2">
            <Nav.Link href="/cart-details">
              <FaShoppingCart />{" "}
            </Nav.Link>

            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ""
            )}
          </Nav>

          <NavDropdown title="Vietnamese" id="basic-nav-dropdown">
            <NavDropdown.Item>English</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>

      <AboutUs show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Header;
