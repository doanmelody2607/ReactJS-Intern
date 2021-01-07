import usersApi from "api/usersApi";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { checkSignIn, User } from "../userSlice";
import "./SignIn.scss";

Main.propTypes = {};

Main.defaultProps = {};

function Main(props) {
  const dispatch = useDispatch();
  const history = useHistory();
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

  const handleClickLogin = async (e) => {
    const params = {
      username: username,
      password: password,
    };

    const reponse = await usersApi.get(params);
    const action = checkSignIn(true);
    if (reponse.length != 0) {
      dispatch(action);

      const action1 = User(JSON.stringify(reponse));
      localStorage.setItem("isCheck", true);
      localStorage.setItem("user", JSON.stringify(reponse));
      dispatch(action1);
      history.push("/");
    } else console.log("khong");
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
export default Main;
