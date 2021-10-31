import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyBookings = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState([]);
  const [loggedInData, setLoggedInData] = useState([]);

  //fetch data
  useEffect(() => {
    fetch("https://macabre-goosebumps-62160.herokuapp.com/all-travelers-data")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [userData]);

  //fetching logged in users data
  useEffect(() => {
    const loggedInUserData = userData.filter(
      (data) => data.email === user.email
    );
    setLoggedInData(loggedInUserData);
  }, [user.email, userData]);

  //deleting a booking
  const handleBookingDelete = (id) => {
    const confirmation = window.confirm("Are you sure to delete?");
    if (confirmation) {
      fetch(
        `https://macabre-goosebumps-62160.herokuapp.com/all-travelers-data/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Booking cancled successfully!!");
            const userRestBookings = loggedInData.filter(
              (booking) => booking._id !== id
            );
            setLoggedInData(userRestBookings);
          }
        });
    }
  };
  return (
    <>
      <Container fluid>
        <Row className="broadcumb-area">
          <h4>My Travel Booking</h4>
        </Row>
        <Row>
          <div className="col-md-2"></div>
          <div className="col-md-8 mt-5 mb-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Package Name</th>
                  <th>Status</th>
                  <th>Cancel</th>
                </tr>
              </thead>
              <tbody>
                {loggedInData.map((singleBooking) => (
                  <>
                    <tr>
                      <td>{singleBooking?.packageName}</td>
                      <td>{singleBooking?.status}</td>
                      <td>
                        <button
                          onClick={() => handleBookingDelete(singleBooking._id)}
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="col-md-2"></div>
        </Row>
      </Container>
    </>
  );
};

export default MyBookings;
