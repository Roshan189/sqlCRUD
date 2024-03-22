const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/EmployeeController.js");

router.post("/addEmployee", employeeController.addEmployee);
router.get("/getAllEmployee", employeeController.getAllEmployees);
router.get("/getOneEmployee/:id", employeeController.getOneEmployee);
router.patch("/updateEmployee/:id", employeeController.updateEmployee);
router.delete("/deleteEmployee/:id", employeeController.deleteEmployee);

module.exports = router;
