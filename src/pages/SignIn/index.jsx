import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SignIn.scss";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { useRouteMatch } from "react-router-dom";
import usersApi from "api/usersApi";

SignIn.propTypes = {};

SignIn.defaultProps = {};

function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handOnsubmit = (e) => {
    e.preventDefault();
  };

  function handleUserName(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const handleClickLogin = (e) => {
    const params = {
      username: username,
      password: password,
    };
    console.log("params", params);
    return new Promise((resolve) => {
      setTimeout(() => {
        const reponse = usersApi.get(params);
        resolve(reponse);
      }, 2000);
    }).then(function (result) {
        if(result.length != 0) console.log("Login success");
        else console.log("Login Faild"); 
    });
  };

  return (
    <Form onSubmit={handOnsubmit} className="form__signin">
      <FormGroup row>
        <Label for="username" sm={4}>
          User name:{" "}
        </Label>
        <Col sm={8}>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            onChange={handleUserName}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="password" sm={4}>
          Password:{" "}
        </Label>
        <Col sm={8}>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={handlePassword}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{ size: 10, offset: 4 }}>
          <Button type="submit" onClick={handleClickLogin}>
            Login
          </Button>
          <Button href="/signup" className="bg-primary ml-2">
            Register
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
}
export default SignIn;
