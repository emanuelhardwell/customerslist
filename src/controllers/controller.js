/*
 */
const controller = {};

controller.list = (req, res) => {
  res.render("index");
};

//export the controller
module.exports = controller;
