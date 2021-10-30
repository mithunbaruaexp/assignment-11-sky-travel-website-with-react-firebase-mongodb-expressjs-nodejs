import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.jpg";

import "./Header.css";

const Header = () => {
  return (
    <>
      <Container fluid className="header">
        <Row>
          <Col>
            <Navbar expand="lg">
              <Container>
                <Navbar.Brand>
                  <Link to="/" className="header-logo">
                    <img src={logo} alt="" />
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                  id="basic-navbar-nav"
                  className="justify-content-evenly"
                >
                  <Nav className="">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                    <NavLink to="/my-bookings">My Bookings</NavLink>
                    <NavLink to="/manage-all-bookings">
                      Manage All Bookings
                    </NavLink>
                    <NavLink to="/add-a-new-service">Add a new service</NavLink>
                  </Nav>
                  <Nav>login</Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
