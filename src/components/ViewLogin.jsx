import axios from "axios";
import React, { useEffect, useState } from "react";
import Navibar from "./Navibar";

const ViewLogin = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/view-login")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
        <Navibar/>
      <div className="row g-4">
        {data.map((value, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            key={index}
          >
            <div className="card shadow" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">{value.name}</h5>

                <p className="card-text">
                  <strong>Department:</strong> {value.department}
                </p>

                <p className="card-text">
                  <strong>Semester:</strong> {value.sem}
                </p>

                <p className="card-text">
                  <strong>Course:</strong> {value.course}
                </p>

                <p className="card-text">
                  <strong>System Number:</strong> {value.systemNumber}
                </p>

                <p className="card-text">
                  <strong>Login Time:</strong> {value.loginTime}
                </p>

                <p className="card-text">
                  <strong>Logout Time:</strong> {value.logoutTime}
                </p>

                <p className="card-text">
                  <strong>Date:</strong> {value.date}
                </p>

                <button className="btn btn-primary">
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewLogin;