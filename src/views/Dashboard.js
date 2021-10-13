import React from "react";
import { PostContext } from "../contexts/Post";
import { useContext, useEffect } from "react";
import {
  Spinner,
  Card,
  Button,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Toast,
} from "react-bootstrap";
import { LoginContext } from "../contexts/Auth";
import SinglePost from "../components/posts/SinglePost";
import AddpostModal from "../components/posts/AddpostModal";
import UpdatepostModal from "../components/posts/UpdatepostModal";
import "../css/DashBoardCss.css";
import Headers from "../components/HeaderandFooter/Header";

const Dashboard = () => {
  const {
    authState: {
      user: { username },
    },
  } = useContext(LoginContext);

  const {
    postState: { posts, postsLoading, post },
    getPosts,
    SetshowAddPostModal,
    showToast: { show, message, type },
    SetshowToast,
  } = useContext(PostContext);

  //Start : Get all posts
  useEffect(() => getPosts(), []);
  // console.log(posts)
  let body = null;
  if (postsLoading) {
    body = (
      <div className="spinner-container center-screen">
        <Spinner animation="border" role="status" variant="info" />
      </div>
    );
  } else if (posts.length === 0) {
    body = (
      <>
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h1">Hi {username}</Card.Header>
          <Card.Body>
            <Card.Title>Welcome to my website</Card.Title>
            <Card.Text>
              Click the button below to track your first skill to learn
              and enjoy more feature
            </Card.Text>
            <Button
              variant="primary"
              onClick={SetshowAddPostModal.bind(this, true)}
            >
              Learn It
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    body = (
      <>
        <Headers className="sticky-top" />
        <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
          {posts.map((post) => {
            return (
              <Col xl={4} md={6} sm={12} key={post._id} className="my-2">
                <SinglePost post={post} />
              </Col>
            );
          })}
        </Row>

        {/* Open Add Post Modal */}
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Add a new thing to learn</Tooltip>}
        >
          <Button
            className="d-flex right-bottom  "
            onClick={SetshowAddPostModal.bind(this, true)}
          >
            <i className="fa fa-plus plusEdit "></i>
          </Button>
        </OverlayTrigger>
      </>
    );
  }

  return (
    <>
      {body}
      <Toast
        show={show}
        className={`bg-${type} text-white  `}
        onClose={SetshowToast.bind(this, {
          show: false,
          message: "",
          type: null,
        })}
        delay={3000}
        autohide
      >
        <Toast.Body>
          <div className=" container-fluid ">
            <div className="row">
              <div className=" col-12 col-xl-12 col-md-12">
                <strong > {message} </strong>
              </div>
            </div>
          </div>
        </Toast.Body>
      </Toast>

      <AddpostModal />
      {post !== null && <UpdatepostModal />}
      {/* After post is added ,show toast */}
    </>
  );
};

export default Dashboard;
