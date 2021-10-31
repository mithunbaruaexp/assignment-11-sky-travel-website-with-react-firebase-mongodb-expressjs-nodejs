import React from "react";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/3dp9JH1/bg1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Sky Travel is the best solution for traveling the worl</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/TB3z53y/bg2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>One Million People trust us</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Hero;
