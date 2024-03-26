const db = require("../models");

// Create main model
const Employee = db.employees;

// Create employee
const addEmployee = async (req, res) => {
  try {
    let info = {
      name: req.body.name,
      age: req.body.age,
      experience: req.body.experience,
      salary: req.body.salary,
    };

    const employee = await Employee.create(info);
    res.status(200).send(employee);
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).send("Error adding employee");
  }
};

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    let employees = await Employee.findAll({});
    res.status(200).send(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).send("Error fetching employees");
  }
};

// Get one employee
const getOneEmployee = async (req, res) => {
  try {
    let id = req.params.id;
    let employee = await Employee.findOne({ where: { id: id } });
    res.status(200).send(employee);
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).send("Error fetching employee");
  }
};

// Update employee
const updateEmployee = async (req, res) => {
  try {
    let id = req.params.id;
    let { name, age, experience, salary } = req.body;
    await Employee.update(
      { name, age, experience, salary },
      { where: { id: id } }
    );
    res.status(200).send("Employee updated successfully!!");
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).send("Error updating employee");
  }
};

// Delete employee
const deleteEmployee = async (req, res) => {
  try {
    let id = req.params.id;
    await Employee.destroy({ where: { id: id } });
    res.status(200).send("Employee deleted from database");
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).send("Error deleting employee");
  }
};

module.exports = {
  addEmployee,
  getAllEmployees,
  getOneEmployee,
  updateEmployee,
  deleteEmployee,
};
