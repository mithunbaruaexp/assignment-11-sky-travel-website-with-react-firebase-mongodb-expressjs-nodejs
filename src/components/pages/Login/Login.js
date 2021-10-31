import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import "./Login.css";

const Login = () => {
  // login registration state
  const [error, setError] = useState("");

  const { signInUsingGoogle, setIsloading, setUser } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";

  //google sign in
  const handleGoogleLogIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  return (
    <>
      <Container fluid className="cheight">
        <Row className="broadcumb-area">
          <Col>
            <div className="login">
              <button onClick={handleGoogleLogIn}>Sign in with Google</button>
              <span className="error">{error}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
