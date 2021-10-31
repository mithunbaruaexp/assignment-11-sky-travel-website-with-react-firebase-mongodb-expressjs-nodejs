import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleService = (props) => {
  const { _id, title, description, img } = props.service;

  return (
    <>
      <div className="col-md-4 mb-4">
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Link to={`/travel-packages/${_id}`}>
              <Button variant="primary">Book Now</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SingleService;
