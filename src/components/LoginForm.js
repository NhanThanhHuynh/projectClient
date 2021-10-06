import React, { useState,useContext } from "react";
import { Form, Col, Row, Container, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/LoginFormCss.css";
import {LoginContext} from '../contexts/Auth'
import {useHistory} from 'react-router-dom'

export default function LoginForm ()  {
  //UseHistory
  const history=useHistory()

  //Context
  const {LoginUser} = useContext(LoginContext)
  //Login state
  const [loginForm, setloginForm] = useState({
    username: "",
    password: ""
  });
  //Onchange 
  const { username, password } = loginForm;
  const OnchangeLogin = (event) => {
    setloginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };
  //Submit
  const LoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const Logindata = await LoginUser(loginForm)
      if(Logindata.success){
        history.push(('/dashboard'))
      }else {
        alert(Logindata.message)
      }
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    
      <Container>
        <p className="h1 d-flex justify-content-center mt-5">
          <i className="fa fa-child text-primary"> socked book</i>
        </p>
        <Row>
          <Col xl={3} sm={3} md={3}></Col>
          <Col
            xl={6}
            sm={6}
            md={6}
            className="bg-light rounded-3 marginFormTop"
          >
            <Form onSubmit={LoginSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  <i className="fa fa-user"></i>
                </Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Enter username" 
                value = {username}
                onChange={OnchangeLogin}
                name='username'
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
                value = {password}
                onChange={OnchangeLogin}
                name='password'
                required
                />
              </Form.Group>
              <Col className="bg-primary d-flex justify-content-center mt-3 rounded-3">
                {" "}
                <Button variant="primary w-100" type="submit">
                  <i className="fa fa-sign-in"> Login</i>
                </Button>
              </Col>
              <Col className="mt-3 bg-success d-flex justify-content-center rounded-3">
                <Link to="/register" className="btn btn-success w-100">
                  <i className="fa fa-user-plus"> Register</i>
                </Link>
              </Col>
            </Form>
          </Col>
          <Col xl={3} sm={3} md={3}></Col>
        </Row>
      </Container>
    
  );
};



