import React from "react";
import Headers from "../HeaderandFooter/Header";
import "../../css/AboutUsCss.css";
import { Container, Row, Col } from "react-bootstrap";

const Aboutme = () => {
  return (
    <>
      <Headers className=" sticky-top" />
      <div className="text-center  container-fluid position-relative w-100">
        <img
          src="https://s3-eu-west-1.amazonaws.com/wp-assets.highcharts.com/svg/new-about-us.svg"
          className="w-100"
        />
        <h1 className="center-screen w-100">About Me </h1>
      </div>
      <div>
        <Container fluid>
          <Row>
            <Col xl={6} md={6} sm={12} className="text-black">
              <p>
                Hi, I am NHAN. My project is about website with Reactjs,Redux from
                front-end and Nodejs,Expressjs from back-end.{" "}
              </p>
              <p>
                Spending time enjoying outdoor activities in our spectacular
                natural environment has been an inspirational catalyst for many
                of my ideas and products.
              </p>
            </Col>
            <Col xl={6} md={6} sm={12} className="text-black">
              <p>
                Nothing is impossible.There are ways that lead to everything,
                and if we had sufficient will we should always have sufficient
                means. It is often merely for an excuse that we say things are
                impossible.
              </p>
              <p>
                From engine to present era. From whitelight to everything, do
                not lose your original mind.
              </p>
            </Col>
            <Col
              xl={12}
              md={12}
              sm={12}
              className="border-top border-dark text-center text-black border-secondary"
            >
              <Container fluid>
                <Row>
                  <h1 className='mt-2'>
                    <i class="fa fa-address-book"></i> : CONTACT
                  </h1>
                  <Col xl={6} md={6} sm={12}>
                    <p className='h4'>
                      <i class="fa fa-facebook"></i> : HUYNH THANH NHAN
                    </p>
                    <p className='h4'>
                      <i class="fa fa-phone"></i> : +84384354338
                    </p>
                  </Col>
                  <Col xl={6} md={6} sm={12}>
                    <p className='h4'>
                      <i class="fa fa-google"></i> : nhankg2016@gmail.com
                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Aboutme;
