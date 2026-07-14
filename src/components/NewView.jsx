import axios from "axios";
import React, { useEffect, useState } from "react";
import Navibar from "./Navibar";

const ViewCourse = () => {

    const [course, setCourse] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/view-login")
            .then((response) => {
                setCourse(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Navibar />

            <div className="container mt-5">
                <h2 className="text-center mb-4">View Login Details</h2>

                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Sl No</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Semester</th>
                            <th>Course</th>
                            <th>System No</th>
                            <th>Login Time</th>
                            <th>Logout Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {course.map((value, index) => (
                            <tr key={value._id}>
                                <td>{index + 1}</td>
                                <td>{value.name}</td>
                                <td>{value.department}</td>
                                <td>{value.sem}</td>
                                <td>{value.course}</td>
                                <td>{value.systemNumber}</td>
                                <td>{value.loginTime}</td>
                                <td>{value.logOutTime}</td>
                                <td>{value.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewCourse;