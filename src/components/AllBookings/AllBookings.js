import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
// import { useParams } from "react-router";

const AllBookings = () => {
  // const { id } = useParams();
  const [allBookings, setAllBookings] = useState([]);
  // const [singleBooking, setSingleBooking] = [];
  //fetching all users
  useEffect(() => {
    fetch("https://macabre-goosebumps-62160.herokuapp.com/all-travelers-data")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, [allBookings]);

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
            const remainingBookings = allBookings.filter(
              (booking) => booking._id !== id
            );
            setAllBookings(remainingBookings);
          }
        });
    }
  };

  //aprove booking
  const handleApproveBooking = (id) => {
    const status = "approved";
    const toBeUpdate = allBookings.find((booking) => booking._id === id);

    const updatedData = { ...toBeUpdate, status };

    const url = `https://macabre-goosebumps-62160.herokuapp.com/all-travelers-data/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    console.log(id);
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
                {allBookings.map((singleBooking) => (
                  <>
                    <tr>
                      <td>{singleBooking?.packageName}</td>
                      <td>{singleBooking?.status}</td>
                      <td>
                        <button
                          onClick={() =>
                            handleApproveBooking(singleBooking._id)
                          }
                        >
                          Approve
                        </button>
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

export default AllBookings;
