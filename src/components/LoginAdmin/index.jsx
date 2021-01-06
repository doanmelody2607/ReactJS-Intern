import React, { useState } from "react";
import { SiMercedes } from "react-icons/si";
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
    if (username === "admin" && password === "123"){
        const admin = true;
        localStorage.setItem('admin', admin);
        history.push("/admin");
    }
  }
  return (
    <div className="login__admin">
      <div className="d-flex">
        {" "}
        <SiMercedes className="w-100 login__admin-logo" /> <h1>MERCEDES</h1>
      </div>

      <Form onSubmit={handOnsubmit} className="form__admin">
        <FormGroup>
          <Label for="username">User name: </Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            onChange={handleUserName}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password: </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={handlePassword}
          />
        </FormGroup>

        <Button className="bg-primary" onClick={handleSubmit}>
          Login
        </Button>

        <a href="/" className="ml-3">
          Go back home
        </a>
      </Form>
    </div>
  );
}

export default LoginAdmin;
