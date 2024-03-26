import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    age: "",
    experience: "",
    salary: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:6500/api/v1/employee/getOneEmployee/" + id)
      .then((res) => setValues(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  //to update the contact
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .patch(
        "http://localhost:6500/api/v1/employee/updateEmployee/" + id,
        values
      )
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h2 style={{ color: "darkcyan", fontStyle: "bold" }}>
          Update Employee
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="age">Age:</label>
            <input
              type="age"
              name="age"
              className="form-control"
              placeholder="Enter Email"
              value={values.age}
              onChange={(e) => setValues({ ...values, age: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="experience">Experience:</label>
            <input
              type="number"
              name="experience"
              className="form-control"
              placeholder="Enter number"
              value={values.experience}
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
              placeholder="Enter number"
              value={values.salary}
              onChange={(e) => setValues({ ...values, salary: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Update</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
