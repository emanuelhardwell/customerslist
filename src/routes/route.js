/*
 */

const express = require("express");
const router = express.Router();
const controllerPro = require("../controllers/controller");

//routes
router.get("/", controllerPro.list);
router.post("/save", controllerPro.save);
router.get("/delete/:id_customer", controllerPro.delete);
router.get("/update/:id_customer", controllerPro.edit);
router.post("/update/:id_customer", controllerPro.update);

//exporting the router
module.exports = router;
