import React from "react";
import { Link } from "react-router-dom";
import '../css/InfoBarCss.css'

const InfoBar = ({ room }) => (
  <div className="d-flex flex-row w-100">
    <div className='d-flex w-100'>
      <h1 className="text-start ">
        <i className="fa fa-podcast" aria-hidden="true">
          {" "}
          {room} room
        </i>{" "}
      </h1>
      
    </div>
    <div className='d-flex w-50 justify-content-end'>
      <Link
        to="/dashboard"
        className="text-dark marginBack text-decoration-none"
      >
        <h3>
        <i className="fa fa-arrow-left" ></i> BACK
        </h3>
      </Link>
    </div>
  </div>
);

export default InfoBar;
