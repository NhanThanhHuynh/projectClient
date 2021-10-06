import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import '../css/InputCss.css'

const Input = ({ setMessage, sendMessage, message }) => {
  //debounce OnChange
  const typingTimeOut = useRef(null);
  const [string, setString] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setString(value);
    if (typingTimeOut) {
      clearTimeout(typingTimeOut.current);
    }
    typingTimeOut.current = setTimeout(() => {
      setMessage(value);
    }, 300);
  };
  const onKeyPressHandle = (event) => {
    if (event.key === "Enter") {
      sendMessage(event);
      setString("");
    } else return null;
  };

  const HandleOnclick = (event) => {
    event.preventDefault();
    sendMessage(event);
    if (sendMessage) {
      setString("");
    }
  };
  return (
    <div className="d-flex flex-row w-100 ">
      <input
        className="border border-dark bg-info w-100"
        type="text"
        placeholder="Type a message..."
        value={string}
        onChange={handleChange}
        onKeyPress={(event) => onKeyPressHandle(event)}
      />

      <Button
        onClick={(event) => HandleOnclick(event)}
        className="btn btn-primary rounded-0 SendMessageButton d-xl-none d-lg-none d-xl-block"
      >
        <i className="fa fa-paper-plane">
        </i>
      </Button>
    </div>
  );
};

export default Input;
