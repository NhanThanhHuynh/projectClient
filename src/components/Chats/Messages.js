import React from "react";
import { Col } from "react-bootstrap";
import "../../css/MessagesCss.css";
import Message from "./Message";

const Messages = ({ messages, name ,count}) => {

  return (messages?
  ( <Col xl={12} md={12} sm={12} className="messages ">
      {messages.map((message, i) => {
        return (
          <div key={i}>
            <Message message={message} name={name} count={count} />
          </div>
        );
      })}
  </Col>) : 
  ( <Col xl={12} md={12} sm={12} className="messages ">
      <div>Welcome</div>
  </Col>)
)};

export default Messages;
