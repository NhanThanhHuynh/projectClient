import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../css/JoinCss.css'

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Container className="w-100 h-100 Top" fluid>
      <Row>
        <Col xl={3} sm={3} md={3}></Col>
        <Col xl={6} sm={6} md={6} className='w-100 text-center text-black'>
          <h1 >Chat room</h1>
          <div>
            <input
              placeholder="Nickname"
              className="btn btn-outline-primary"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Room"
              className="mt-3 btn btn-outline-primary "
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <Button className="btn btn-success mt-3" type="submit">
              Connect Room <i className="fa fa-sign-in" aria-hidden="true"></i>
            </Button>
          </Link>
        </Col>
        <Col xl={3} sm={3} md={3}></Col>
      </Row>
    </Container>
  );
}
