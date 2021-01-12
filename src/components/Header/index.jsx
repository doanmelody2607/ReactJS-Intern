import React, { useState } from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { SiMercedes } from "react-icons/si";
import { useSelector } from "react-redux";
import AboutUs from "../Modal";
import "./Header.scss";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

function Header(props) {
  const [modalShow, setModalShow] = useState(false);
  const isCheckSignIn = useSelector((state) => state.user.isCheckSignIn);
  const getUser = useSelector((state) => state.user.initialUser);
  console.log("1", getUser);
  console.log("2", localStorage.getItem("user"));
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : getUser;
  console.log(user);
  function handleClickLogout() {
    localStorage.removeItem("isCheck");
    window.location.reload(false);
  }
  return (
    <>
      <Navbar className="navbar " variant="light" expand="lg" sticky="top">
        <Navbar.Brand className="text-danger" href="/">
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
            <div className="align-items-center navbar__user-login">
              <div className="mr-2">
                {user.length > 0 ? user[0].name : ""}{" "}
                <FaUserCircle style={{ fontSize: 25 }} />{" "}
                <Button
                  className="btn btn-danger navbar__user-logout"
                  onClick={handleClickLogout}
                >
                  Log out
                </Button>
              </div>
            </div>
          ) : (
            <Button
              className="nav__button  bg-danger text-white"
              href="/signin"
              variant="outline-danger"
              inline-block
            >
              Sign In
            </Button>
          )}
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
