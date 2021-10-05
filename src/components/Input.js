import React, { useState, useRef } from "react";

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

  return (
    <input
      className="border border-dark bg-info flex-fill "
      type="text"
      placeholder="Type a message..."
      value={string}
      onChange={handleChange}
      onKeyPress={(event) => onKeyPressHandle(event)}
    />
  );
};

export default Input;
