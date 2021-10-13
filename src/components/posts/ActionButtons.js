import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { PostContext } from "../../contexts/Post";
import '../../css/ActionButtonCss.css'

const ActionButtons = ({ url, _id }) => {
  const {deletePost,findPost,SetshowUpdatePostModal} =useContext(PostContext)
  const choosePost = (postId)=>{
    findPost(postId)
    SetshowUpdatePostModal(true)
    
  }

  return (
    <>
      <Button className='marginButton1'  href={url} target="_blank">
        <i className="fa fa-play" ></i>
      </Button>
      <Button className='marginButton1'  onClick={choosePost.bind(this,_id)}>
        <i className="fa fa-pencil" ></i>
      </Button>
      <Button onClick={deletePost.bind(this,_id)} >
       <i className="fa fa-trash"></i>
      </Button>
    </>
  );
};

export default ActionButtons;
