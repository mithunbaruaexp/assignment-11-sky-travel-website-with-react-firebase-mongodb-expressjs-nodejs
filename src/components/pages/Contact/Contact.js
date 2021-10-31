import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <Container fluid>
        <Row className="broadcumb-area">
          <h4>Contact us</h4>
        </Row>
      </Container>

      <Container>
        <Row>
          <div className="contact-area">
            <form>
              <input type="text" name="" placeholder="Your Name" id="" />
              <input
                type="email"
                name=""
                placeholder="Your Email Address"
                id=""
              />
              <input
                type="number"
                name=""
                placeholder="Your Phone Number"
                id=""
              />
              <textarea
                name=""
                placeholder="Your message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <input type="submit" value="Send Message" />
            </form>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
