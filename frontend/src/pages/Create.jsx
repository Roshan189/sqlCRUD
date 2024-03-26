import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    age: "",
    experience: "",
    salary: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:6500/api/v1/employee/addEmployee", values)
      .then((res) => {
        setValues(res.data);
        console.log(res, "res");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h2 style={{ color: "darkcyan", fontStyle: "bold", marginLeft: "20%" }}>
          Add a Employee
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="age">Age:</label>
            <input
              type="age"
              name="age"
              className="form-control"
              placeholder="Enter age"
              onChange={(e) => setValues({ ...values, age: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="experience">Experience:</label>
            <input
              type="number"
              name="experience"
              className="form-control"
              placeholder="Enter experience"
              onChange={(e) =>
                setValues({ ...values, experience: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="salary">Salary:</label>
            <input
              type="number"
              name="salary"
              className="form-control"
              placeholder="Enter salary"
              onChange={(e) => setValues({ ...values, salary: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
