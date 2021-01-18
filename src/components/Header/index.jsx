import React, { useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaUserCircle } from "react-icons/fa";
import { SiMercedes } from "react-icons/si";
import { useSelector } from "react-redux";
import AboutUs from "../Modal";
import "./Header.scss";

function Header(props) {
  const [modalShow, setModalShow] = useState(false);
  const isCheckSignIn = useSelector((state) => state.user.isCheckSignIn);
  const getUser = useSelector((state) => state.user.initialUser);
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : getUser;
  function handleClickLogout() {
    localStorage.removeItem("isCheck");
    window.location.reload(false);
  }

  const { t, i18n } = useTranslation();

  function handleLangues(e) {
    i18n.changeLanguage(e.target.value);
  }
  const checkSelect = i18n.languages[0] === "vi" ? "selected" : "";
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
              {t("header.home")}
            </Nav.Link>
            <Nav.Link
              href=""
              className="ml-3"
              onClick={() => setModalShow(true)}
            >
              {t("header.about")}
            </Nav.Link>
            <Nav.Link href="/services" className="ml-3">
              {t("header.services")}
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
                  {t("header.logout")}
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
              {t("header.signin")}
            </Button>
          )}
          <Nav className="mt-2">
            <select
              name="language-picker-select"
              id="language-picker-select"
              onChange={handleLangues}
              className="ml-3"
            >
              <option
                lang="en"
                value="en"
                id="vietnamese-img"
                style={{ color: red }}
              >
                English
              </option>
              <option lang="vi" value="vi" selected={checkSelect}>
                Tiếng Việt
              </option>
            </select>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AboutUs show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Header;
