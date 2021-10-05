import React, { useState, useContext } from "react";
import { Form, Col, Row, Container, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/LoginFormCss.css";
import { LoginContext } from "../contexts/Auth";
import { useHistory } from "react-router-dom";

export default function RegisterForm() {
  //UseHistory
  const history = useHistory();

  //Context
  const { Register } = useContext(LoginContext);
  //Login state
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });
  //Onchange
  const { username, password, confirmpassword } = registerForm;
  const OnchangeRegister = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };
  //Submit
  const RegisterSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmpassword) {
      alert("Password does not match");
      return;
    }
    try {
      const Registerdata = await Register(registerForm);
      console.log(Registerdata)
      if (Registerdata.success) {
        alert("Register successfully");
        history.push("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <p className="h1 d-flex justify-content-center mt-5">
        <i className="fa fa-child text-primary"> socked book</i>
      </p>
      <Row>
        <Col xl={3} sm={3} md={3}></Col>
        <Col xl={6} sm={6} md={6} className="bg-light rounded-3 marginFormTop">
          <Form onSubmit={RegisterSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>
                <i className="fa fa-user"></i>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={OnchangeRegister}
                name="username"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <i className="fa fa-lock"></i>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={OnchangeRegister}
                name="password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={OnchangeRegister}
                name="confirmpassword"
                required
              />
            </Form.Group>

            <Col className="bg-primary d-flex justify-content-center mt-3 rounded-3">
              {" "}
              <Button variant="primary" type="submit">
                <i className="fa fa-user-plus" >Register</i>
              </Button>
            </Col>
            <Col className="mt-3 bg-success d-flex justify-content-center rounded-3">
              <Link to="/login" className="btn btn-success">
                Already have account ? Login <i className="fa fa-universal-access" ></i>
              </Link>
            </Col>
          </Form>
        </Col>
        <Col xl={3} sm={3} md={3}></Col>
      </Row>
    </Container>
  );
}
