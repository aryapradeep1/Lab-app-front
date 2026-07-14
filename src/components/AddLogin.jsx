import axios from "axios";
import React, { useState } from "react";

const AddLogin = () => {
  const [input, changeInput] = useState({
    name: "",
    department: "",
    sem: "",
    course: "",
    systemnumber: "",
    loginTime: "",
    logoutTime: "",
    date: "",
  });

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValues = () => {
    console.log(input);

    axios
      .post("http://localhost:3000/add-login", input)
      .then((response) => {
        alert("Login Added Successfully");
        console.log(response.data);

        changeInput({
          name: "",
          department: "",
          sem: "",
          course: "",
          systemnumber: "",
          loginTime: "",
          logoutTime: "",
          date: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to Add Login");
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">

          <div className="row g-3">

            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={input.name}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Department</label>
              <input
                type="text"
                className="form-control"
                name="department"
                value={input.department}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Semester</label>
              <input
                type="text"
                className="form-control"
                name="sem"
                value={input.sem}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Course</label>
              <input
                type="text"
                className="form-control"
                name="course"
                value={input.course}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">System Number</label>
              <input
                type="text"
                className="form-control"
                name="systemnumber"
                value={input.systemnumber}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Login Time</label>
              <input
                type="text"
                className="form-control"
                name="loginTime"
                value={input.loginTime}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Logout Time</label>
              <input
                type="text"
                className="form-control"
                name="logoutTime"
                value={input.logoutTime}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={input.date}
                onChange={inputHandler}
              />
            </div>

            <div className="col-12 text-center">
              <button
                className="btn btn-success"
                onClick={readValues}
              >
                Add
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AddLogin;