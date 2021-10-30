import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./Booking.css";

const Booking = () => {
  const { id } = useParams();

  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState({});

  //data fetch from server
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  //find clicked service from the fetched data
  useEffect(() => {
    const foundService = services.find((service) => service._id === id);
    setSelectedService(foundService);
  }, [id, services]);
  return (
    <>
      <Container fluid>
        <Row className="broadcumb-area">
          <Col>
            <div className="selectedService">
              <img src={selectedService?.img} alt="" />
              <div className="service-meta">
                <h3>{selectedService?.title}</h3>
                <p>{selectedService?.description}</p>
                <h6>Time: {selectedService?.time}</h6>
                <h6>Price: {selectedService?.price}</h6>
              </div>
            </div>
          </Col>
          <Col>x</Col>
        </Row>
      </Container>
    </>
  );
};

export default Booking;
