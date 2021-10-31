import React, { useRef } from "react";
import "./AddService.css";

const AddService = () => {
  const titleRef = useRef("");
  const priceRef = useRef("");
  const timeRef = useRef("");
  const descRef = useRef("");
  const imgRef = useRef("");

  const handleNewService = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const time = timeRef.current.value;
    const description = descRef.current.value;
    const img = imgRef.current.value;

    const newService = { title, description, time, price, img };

    //send data to the server
    fetch("https://macabre-goosebumps-62160.herokuapp.com/packages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        titleRef.current.value = "";
        priceRef.current.value = "";
        timeRef.current.value = "";
        descRef.current.value = "";
        imgRef.current.value = "";
        if (data.insertedId) {
          alert("New Service Added Successfully");
        }
      });
  };
  return (
    <>
      <div
        className="containerFluid addnewservicewrap"
        style={{
          backgroundImage: `url(https://trekroute.com/wp-content/uploads/2015/08/Tour-Packages-in-Nepal-1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          zIndex: "1",
        }}
      >
        <div className="title p-14 pt-24 pb-24">
          <h1 className="text-4xl text-white">Add New Service</h1>
        </div>
        <div className="title pb-24 addnewservice">
          <form onSubmit={handleNewService}>
            <input
              required
              ref={titleRef}
              type="text"
              placeholder="Service title"
            />
            <input required ref={priceRef} type="number" placeholder="Price" />
            <input required ref={timeRef} type="date" placeholder="Time" />
            <textarea
              required
              ref={descRef}
              placeholder="Write Description"
            ></textarea>

            <input required ref={imgRef} type="text" placeholder="Image link" />
            <input
              className="bg-blue-600 text-white"
              type="submit"
              value="Add Service"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddService;
