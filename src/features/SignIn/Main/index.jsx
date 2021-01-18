import usersApi from "api/usersApi";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { checkSignIn, User } from "../userSlice";
import "./SignIn.scss";

Main.propTypes = {};

Main.defaultProps = {};

function Main(props) {
  const { t } = useTranslation();

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

    const reponse = await usersApi.getAll(params);
    const action = checkSignIn(true);
    if (reponse.length != 0) {
      dispatch(action);

      const action1 = User(JSON.stringify(reponse));
      localStorage.setItem("isCheck", true);
      localStorage.setItem("user", JSON.stringify(reponse));
      dispatch(action1);
      history.push("/");
    }
  };

  return (
    <Form onSubmit={handOnsubmit} className="form__signin">
      <FormGroup row>
        <Label for="username" sm={4}>
          {t("header.username")}
        </Label>
        <Col sm={8}>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder={t("header.username")}
            onChange={handleUserName}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="password" sm={4}>
          {t("header.password")}
        </Label>
        <Col sm={8}>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder={t("header.password")}
            onChange={handlePassword}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{ size: 10, offset: 4 }}>
          <Button
            className="btn btn-danger"
            type="submit"
            onClick={handleClickLogin}
          >
            {t("header.signin")}
          </Button>
          <Button href="/signup" className="ml-2">
            {t("header.register")}
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
}
export default Main;
