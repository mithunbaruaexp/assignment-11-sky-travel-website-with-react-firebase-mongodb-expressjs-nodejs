import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Booking.css";

const Booking = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState({});

  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const addressRef = useRef("");
  const packagesRef = useRef("");
  const statusRef = useRef("");

  //data fetch from server
  useEffect(() => {
    fetch("https://macabre-goosebumps-62160.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  //find clicked service from the fetched data
  useEffect(() => {
    const foundService = services.find((service) => service._id === id);
    setSelectedService(foundService);
  }, [id, services]);

  //booking form
  const handleBookingFrom = (e) => {
    e.preventDefault();

    const newServiceOrder = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      packageName: packagesRef.current.value,
      status: statusRef.current.value,
    };

    fetch("https://macabre-goosebumps-62160.herokuapp.com/all-travelers-data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newServiceOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        addressRef.current.value = "";
        packagesRef.current.value = "";

        if (data.insertedId) {
          alert("Booking complete");
        }
      });
  };
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
          <Col>
            <div className="place-order">
              <form onSubmit={handleBookingFrom}>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  ref={nameRef}
                  defaultValue={user?.displayName}
                />

                <input
                  required
                  type="text"
                  placeholder="Your Email"
                  ref={emailRef}
                  defaultValue={user?.email}
                />

                <input
                  required
                  type="text"
                  placeholder="Your Phone Number"
                  ref={phoneRef}
                  defaultValue=""
                />

                <input
                  required
                  type="text"
                  placeholder="Your Address"
                  ref={addressRef}
                  defaultValue=""
                />

                <input
                  required
                  placeholder="Package"
                  type="text"
                  ref={packagesRef}
                  defaultValue={selectedService?.title}
                />

                <input type="hidden" value="pending" ref={statusRef} />

                <input type="submit" value="Pay and Book" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Booking;
