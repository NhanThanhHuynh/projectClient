import React from "react";
import { Col } from "react-bootstrap";

const InfoBar = ({ room }) => (
  <h1>
    <i className="fa fa-podcast" aria-hidden="true">
      {" "}
      {room} room
    </i>{" "}
  </h1>
);

export default InfoBar;
