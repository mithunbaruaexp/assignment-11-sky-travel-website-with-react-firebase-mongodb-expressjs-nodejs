import React from "react";
import { Link } from "react-router-dom";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <div className="homeabout">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://i.ibb.co/StYpQnf/bg.png" alt="" />
          </div>
          <div className="col-md-6">
            <div className="section-title">
              <h3>About Us</h3>
              <p>
                We are a part of the Trip.com Group, a NASDAQ listed company
                since 2003 (NASDAQ: TCOM) with over 45,100 employees and over
                400 million members, making it one of the leading online travel
                agencies in the world. With more than 1.4 million hotels in 200
                countries and regions, we've built an extensive hotel network to
                give our customers a fantastic choice of accommodation. Our
                far-reaching flight network has over 2 million individual flight
                routes connecting more than 5,000 cities around the globe. When
                you combine this with our 24/7 English customer service and
                various other travel products, you can trust us to take care of
                your next trip. This website is operated by Trip.com Travel
                Singapore Pte. Ltd. ("Trip.com Singapore"), a Singapore entity
                (registration number 201613701E). Trip.com Singapore is part of
                the Trip.com Group of companies. Trip.com Singapore is licensed
                under the Travel Agents Act of Singapore (Cap. 334) under
                license number 02943.
              </p>
              <Link to="/about">
                <button>Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
