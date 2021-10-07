import React, { useEffect, useState, useCallback, useRef } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import * as conversation from "../constants/conversation";
import { Form } from "react-bootstrap";
import InfoBar from "./InfoBar";
import "../css/ChatCss.css";
import Messages from "./Messages";
import Input from "./Input";
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  // const useDebouncedEffect = (effect, deps, delay) => {
  //   useEffect(() => {
  //     const handler = setTimeout(() => effect(), delay);

  //     return () => clearTimeout(handler);
  //   }, [...(deps || []), delay]);
  // };

  useEffect(() => {
    let { name, room } = queryString.parse(location.search);
    socket = io(conversation.host);
    setRoom(room);
    setName(name);
    //login chat [dismount handle]
    socket.emit("join", { name, room }, () => {});
    //log out chat [unmount handle]
    return () => {
      socket.emit("disconect");
      socket.off();
    };
  }, [conversation.host, location.search]);
  //Send Mess
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  return (
    //   <Container className="outerContainer ">
    //   <Row>
    //     <InfoBar room={room} />
    //    <Messages messages={messages} name={name} />
    //     <Input
    //       message={message}
    //       setMessage={setMessage}
    //       sendMessage={sendMessage}
    //    
    //   </Row>
    // </Container>
    <div className='bodyinput'>
      <header className="d-flex justity-content-start bg-primary text-center">
        <InfoBar room={room} />
      </header>
      <main>
        <Messages messages={messages} name={name} />
      </main>
      <footer className='d-flex'>
        <Form className=' d-flex flex-fill'>
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
        </Form>
      </footer>
    </div>
  );
};

export default Chat;
