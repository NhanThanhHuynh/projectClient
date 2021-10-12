import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../css/MainRedirectCss.css";

const MainRedirect = () => {
  return (
    <>
      <img
        src="https://st2.depositphotos.com/3547923/42661/v/950/depositphotos_426617734-stock-illustration-abstract-glitch-tiktok-background-vector.jpg"
        alt=""
        className="imgsetting center"
      />

      <div className="center w-100 d-flex flex-row justify-content-center ">
        <Link className="textBlockunderline   w-100 mx-3" to="/dashboard">
          <Button
            variant="light"
            className=" textHeight btn text-dark rounded-0  w-100 "
          >
            <h1>
              CHAT ROOM <i className="fa fa-hand-lizard-o"></i>
            </h1>
          </Button>
        </Link>
        <Link className="textBlockunderline  w-100 mx-3" to="/currency">
          <Button
            variant="light"
            className=" textHeight btn rounded-0  text-dark w-100 "
          >
            <h1>
              COIN MARKET <i className="fa fa-location-arrow "></i>{" "}
            </h1>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default MainRedirect;
