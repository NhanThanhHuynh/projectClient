import React from "react";
import { Card,  Badge } from "react-bootstrap";
import ActionButtons from "./ActionButtons";


const SinglePost = ({ post: { _id, status, title, description, url } }) => {
  var border =
    status === "LEARNED"
      ? "success"
      : status === "LEARNING"
      ? "warning"
      : "danger";

  return (
    <Card className={`shadow border border-${border}`}>
      <Card.Body>
        <Card.Title>
          <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex">{title}</div>
              <div></div>
              <div className='d-flex '>
                <ActionButtons url={url} _id={_id} />
              </div>
            </div>
            <Badge
              pill
              variant={` border border-${border}`}
              className={`text-${border} mt-2`}
            >
              {status}
            </Badge>
          </div>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SinglePost;
