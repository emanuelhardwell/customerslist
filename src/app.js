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
app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      database: "customerslist",
      port: 3306,
      user: "customer",
      password: "customer100",
    },
    "single"
  )
);

app.use(express.urlencoded({ extended: false }));

//routes
const routerPro = require("./routes/route");
app.use("/", routerPro);

//listen the server
app.listen(app.get("port"), () =>
  console.log("Server listening on port " + app.get("port"))
);
