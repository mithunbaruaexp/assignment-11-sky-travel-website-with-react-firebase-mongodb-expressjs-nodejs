import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <Container>
        <Row>
          <div className="section-title pt-5 pb-5">
            <h3>Our Services</h3>
          </div>
          {services.map((service) => (
            <SingleService key={service._id} service={service}></SingleService>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Services;
