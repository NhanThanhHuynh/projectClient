import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "../../contexts/Auth";
import { useContext } from "react";
import "../../css/HeaderCss.css";

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
            className="font-weight-bolder text-white mx-2 p-0 "
            to="/learning"
            as={Link}
          >
            Welcome <strong className="text-black">{username}</strong>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " className='mx-2' />
        <Navbar.Collapse
          id="basic-navbar-nav"
         
        >
          <Nav className="d-flex mx-2">
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
            <Nav.Link>
              <span
                className="font-weight-bolder text-white cursor"
                onClick={logoutUser}
              >
                LOG OUT <i className="fa fa-sign-out"></i>
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Headers;
