const express = require("express");
const app = express();
const cors = require("cors");
const port = 6500;
require("./models/index");

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
const router = require("./routes/employeeRouter");
app.use("/api/v1/employee", router);

//testing the api
app.get("/", (req, res) => {
  res.json({ msg: "hello from server" });
});

//listen on server
app.listen(port, (err) => {
  if (err) console.log("error in listening port:", port);
  else console.log("server is listening on port:", port);
});
