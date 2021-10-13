import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "../../contexts/Auth";
import { useContext } from "react";

const Headers = () => {
  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(LoginContext);
  return (
    <>
      <Navbar expand="lg" bg="primary" variant="dark" className="shadow">
        <Navbar.Brand className="font-weight-bolder text-white">
          <Nav.Link
            className="font-weight-bolder text-white "
            to="/learning"
            as={Link}
          >
            Welcome <strong className="text-black">{username}</strong>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto d-flex mx-2">
            <Nav.Link
              className="font-weight-bolder text-white "
              to="/dashboard"
              as={Link}
            >
              CHATBOX <i className="fa fa-weixin"></i>
            </Nav.Link>

            <Nav.Link
              className="font-weight-bolder text-white "
              to="/currency"
              as={Link}
            >
              COIN MARKET <i className="fa fa-btc"></i>
            </Nav.Link>

            <Nav.Link
              className="font-weight-bolder text-white "
              to="/about"
              as={Link}
            >
              ABOUT ME <i className="fa fa-child"></i>
            </Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <Button
              className="font-weight-bolder text-white btn"
              onClick={logoutUser}
            >
              LOG OUT <i className="fa fa-sign-out"></i>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Headers;
