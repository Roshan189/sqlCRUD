import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:6500/api/v1/employee/getOneEmployee/" + id)
      // console.log();
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100 w-100">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3 style={{ color: "darkcyan", fontStyle: "italic" }}>
          Details of Employee
        </h3>

        <div
          className="mb-2 p-2 "
          style={{ color: "darkgray", fontStyle: "italic" }}
        >
          <strong>Name: {data.name}</strong>
        </div>

        <div
          className="mb-2 p-2"
          style={{ color: "darkgray", fontStyle: "italic" }}
        >
          <strong>Age: {data.age}</strong>
        </div>

        <div
          className="mb-2 p-2"
          style={{ color: "darkgray", fontStyle: "italic" }}
        >
          <strong>Experience: {data.experience}</strong>
        </div>

        <div
          className="mb-2 p-2"
          style={{ color: "darkgray", fontStyle: "italic" }}
        >
          <strong>Salary: {data.salary}</strong>
        </div>

        {/* <Link to={`/update/${id}`} className="btn btn-success">
          Edit
        </Link> */}

        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Read;
