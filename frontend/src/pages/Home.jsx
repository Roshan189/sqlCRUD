import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAll();
  }, []);

  //to get dta from api
  const fetchAll = () => {
    axios
      .get("http://localhost:6500/api/v1/employee/getAllEmployee")

      .then((res) => setData(res.data))
      // console.log("get", res.data))
      .catch((error) => console.log(error));
  };

  //delete contact
  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete!");
    if (confirm) {
      axios
        .delete("http://localhost:6500/api/v1/employee/deleteEmployee/" + id)
        .then((res) => {
          navigate("/");
          fetchAll();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h2 className="p-2" style={{ fontStyle: "bold", color: "gray" }}>
        Employee
        <i className="fa-solid fa-book-open-reader m-2"></i>
        Manager
      </h2>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-flex-start m-2">
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
    </div>
  );
};

export default Home;
