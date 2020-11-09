/*
 */

const express = require("express");
const router = express.Router();
const controllerPro = require("../controllers/controller");

//routes
router.get("/", controllerPro.list);

//exporting the router
module.exports = router;
