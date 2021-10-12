import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { PostContext } from "../../contexts/Post";

const ActionButtons = ({ url, _id }) => {
  const {deletePost,findPost,SetshowUpdatePostModal} =useContext(PostContext)
  const choosePost = (postId)=>{
    findPost(postId)
    SetshowUpdatePostModal(true)
    
  }

  return (
    <>
      <Button className="post-button mx-2" href={url} target="_blank">
        <i className="fa fa-play" ></i>
      </Button>
      <Button className="post-button mx-2" onClick={choosePost.bind(this,_id)}>
        <i className="fa fa-pencil" ></i>
      </Button>
      <Button className="post-button mx-2" onClick={deletePost.bind(this,_id)} >
       <i className="fa fa-trash"></i>
      </Button>
    </>
  );
};

export default ActionButtons;
