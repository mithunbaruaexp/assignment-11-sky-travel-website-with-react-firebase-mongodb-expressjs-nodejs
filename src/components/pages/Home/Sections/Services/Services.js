import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://macabre-goosebumps-62160.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  return (
    <>
      <Container>
        <Row>
          <div className="section-title pt-5 pb-5">
            <h3>Our Tour and Travel Packages</h3>
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
