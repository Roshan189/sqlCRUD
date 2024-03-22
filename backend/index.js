const express = require("express");
const app = express();
const cors = require("cors");
const port = 6500;
require("./models/index");

// app.use(function (req, res, next) {
//   let origin = req.headers.origin;
//   res.header(
//     "Access-Control-Allow-Origin",
//     req.headers.host.indexOf("localhost") > -1
//       ? "http://localhost:6500"
//       : origin
//   );
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// });

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
