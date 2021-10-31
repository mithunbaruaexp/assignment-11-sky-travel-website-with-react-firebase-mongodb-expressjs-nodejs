import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../images/logo.jpg";

import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
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
                  className="justify-content-between"
                >
                  <Nav className="">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    {user?.email ? (
                      <>
                        <NavLink to="/my-bookings">My Bookings</NavLink>
                        <NavLink to="/all-bookings">
                          Manage All Bookings
                        </NavLink>
                        <NavLink to="/add-service">Add a new service</NavLink>
                      </>
                    ) : (
                      ""
                    )}
                  </Nav>
                  <Nav className="clogin">
                    {user?.email ? (
                      <button onClick={logOut}>
                        {user?.displayName}(Log Out)
                      </button>
                    ) : (
                      <button>
                        {" "}
                        <NavLink to="/login">login</NavLink>
                      </button>
                    )}
                  </Nav>
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
