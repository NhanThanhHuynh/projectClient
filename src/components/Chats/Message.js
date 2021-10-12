import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../css/MessageCss.css";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  if(text.length>100){
    return text='Error: please type less than 100 word '
    
  }
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="d-flex justify-content-end">
      <Container>
        <Row>
          <Col xl={12} sm={12} md={12} className='d-flex justify-content-start w-100 text-wrap'>
          <div className='btn text-black'> 
          {trimmedName} : {text}
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  ) : (user===undefined?((
    <div className="d-flex justify-content-end ">
    <Container>
     <Row>
       <Col xl={12} sm={12} md={12} className='d-flex justify-content-start w-100 text-wrap'>
       <div className='btn text-black'> 
       {text}
       </div>
       </Col>
     </Row>
   </Container>
 </div>
  )):((
    <div className="d-flex justify-content-end ">
       <Container>
        <Row>
          <Col xl={12} sm={12} md={12} className='d-flex justify-content-start w-100 text-wrap'>
          <div className='btn text-black'> 
          {user} : {text}
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )));
  
  
};

export default Message;
