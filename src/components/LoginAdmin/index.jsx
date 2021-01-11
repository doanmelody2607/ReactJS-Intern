import React, { useEffect, useState } from "react";
import { SiMercedes } from "react-icons/si";
import { FaUserTie, FaLockOpen } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import "./LoginAdmin.scss";

LoginAdmin.propTypes = {};

function LoginAdmin(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handOnsubmit(e) {
    e.preventDefault();
  }

  function handleUserName(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit() {
    if (username === "admin" && password === "123") {
      const admin = true;
      localStorage.setItem("admin", admin);
      history.push("/admin/dashboard");
    }
  }
  if (localStorage.getItem("admin")) history.push("/admin/dashboard");

  return (
    <div className="login__admin">
      <div className="d-flex text-danger">
        <SiMercedes className="w-50 login__admin-logo" />
        <h1 className="mr-4">MERCEDES</h1>
      </div>

      <Form onSubmit={handOnsubmit} className="form__admin">
        <FormGroup>
          <Label for="username">
            <FaUserTie /> <b>Username</b>{" "}
          </Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="@Enter your username"
            onChange={handleUserName}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">
            <FaLockOpen /> <b>Password</b>
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="@Enter your password"
            onChange={handlePassword}
          />
        </FormGroup>

        <Button className="btn btn-danger" onClick={handleSubmit}>
          Login
        </Button>

        <Button href="/" className="ml-3">
          Go back home
        </Button>
      </Form>
    </div>
  );
}

export default LoginAdmin;
