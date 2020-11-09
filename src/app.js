/*
 */
const express = require("express");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const morgan = require("morgan");
const path = require("path");

const app = express();

//config
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//config static files
app.use(express.static(path.join(__dirname, "css")));

//middleware
app.use(morgan(dev));
app.use(
  myConnection(mysql, {
    host: "localhost",
    database: "localhost",
    port: 3306,
    user: "customer",
    password: "customer100",
  }, "single")
);

app.use(express.bodyParser({ urlencoded: false }));

//listen the server
app.listen(app.get("port"), () =>
  console.log("Server listening on port " + app.get("port"))
);
