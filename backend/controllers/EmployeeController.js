const db = require("../models");

//create main model
const Employee = db.employees;

//create employee
const addEmployee = async (req, res) => {
  let info = {
    name: req.body.name,
    age: req.body.age,
    experience: req.body.experience,
    salary: req.body.salary,
  };
  //   console.log("add", req.body);

  const employee = await Employee.create(info);
  res.status(200).send(employee);
  // console.log(employee);
};

//get allEmployees
const getAllEmployees = async (req, res) => {
  let employees = await Employee.findAll({});
  res.status(200).send(employees);
};

//get OneEmployee
const getOneEmployee = async (req, res) => {
  let id = req.params.id;
  // console.log(id);
  let employee = await Employee.findOne({ where: { id: id } });
  res.status(200).send(employee);
};

//update employee
const updateEmployee = async (req, res) => {
  let id = req.params.id;
  let { name, age, experience, salary } = req.body;
  let employees = await Employee.update(
    { name, age, experience, salary },
    { where: { id: id } }
  );
  res.status(200).send(employees, "employee updated successfully!!");
};

//delete employee
const deleteEmployee = async (req, res) => {
  let id = req.params.id;
  await Employee.destroy({ where: { id: id } });
  res.status(200).send("employee deleted from database");
};

module.exports = {
  addEmployee,
  getAllEmployees,
  getOneEmployee,
  updateEmployee,
  deleteEmployee,
};
