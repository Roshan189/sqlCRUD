import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const EmployeeManager = () => {
  const [data, setData] = useState([]);
  const [values, setValues] = useState({
    name: "",
    age: "",
    experience: "",
    salary: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get("http://localhost:6500/api/v1/employee/getOneEmployee/" + id)
        .then((res) => setValues(res.data))
        .catch((error) => console.log(error));
    } else {
      axios
        .get("http://localhost:6500/api/v1/employee/getAllEmployee")
        .then((res) => setData(res.data))
        .catch((error) => console.log(error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:6500/api/v1/employee/addEmployee", values)
      .then((res) => {
        setValues(res.data);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

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

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete!");
    if (confirm) {
      axios
        .delete("http://localhost:6500/api/v1/employee/deleteEmployee/" + id)
        .then((res) => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      {!id ? (
        <React.Fragment>
          <h2 className="p-2" style={{ fontStyle: "bold", color: "gray" }}>
            Employee
            <i className="fa-solid fa-book-open-reader m-2"></i>
            Manager
          </h2>
          <div className="w-75 rounded bg-white border shadow p-4">
            <div className="d-flex justify-content-end">
              <Link to="/create" className="btn btn-success">
                Add Employee
                <i className="fa-solid fa-plus ms-2"></i>
              </Link>
            </div>
            <table className="table table-striped">
              <thead>
                <tr style={{ color: "darkgoldenrod" }}>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Experience</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.map((d, i) => (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td style={{ color: "lightslategrey" }}>{d.name}</td>
                    <td style={{ color: "lightslategrey" }}>{d.age}</td>
                    <td style={{ color: "lightslategrey" }}>{d.experience}</td>
                    <td style={{ color: "lightslategrey" }}>{d.salary}</td>
                    <td>
                      <Link
                        to={`/read/${d.id}`}
                        className="btn btn-sm btn-info me-2"
                      >
                        <i className="fa-solid fa-eye"></i>
                      </Link>
                      <Link
                        to={`/update/${d.id}`}
                        className="btn btn-sm btn-primary me-2"
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={(e) => handleDelete(d.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </React.Fragment>
      ) : (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
          <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h1>{id ? "Update User" : "Add a User"}</h1>
            <form onSubmit={id ? handleUpdate : handleSubmit}>
              <div className="mb-2">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter name"
                  value={values.name}
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-2">
                <label htmlFor="age">Age:</label>
                <input
                  type="age"
                  name="age"
                  className="form-control"
                  placeholder="Enter age"
                  value={values.age}
                  onChange={(e) =>
                    setValues({ ...values, age: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="experience">Experience:</label>
                <input
                  type="number"
                  name="experience"
                  className="form-control"
                  placeholder="Enter experience"
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
                  placeholder="Enter salary"
                  value={values.salary}
                  onChange={(e) =>
                    setValues({ ...values, salary: e.target.value })
                  }
                />
              </div>
              <button className="btn btn-success">
                {id ? "Update" : "Submit"}
              </button>
              <Link to="/" className="btn btn-primary ms-3">
                Back
              </Link>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeManager;
