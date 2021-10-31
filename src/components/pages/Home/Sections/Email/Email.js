import React from "react";
import "./Email.css";

const Email = () => {
  return (
    <div className="email-wrapper">
      <div className="container">
        <div className="row">
          <div className="email-sub">
            <h2>Trave with us</h2>
            <form>
              <input type="email" placeholder="Your email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
