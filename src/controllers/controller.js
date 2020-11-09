/*
 */
const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("select * from customer", (err, rows) => {
      if (err) {
        res.json(err);
      }
      /* console.log(rows); */
      res.render("index", { data: rows });
    });
  });
};

//export the controller
module.exports = controller;
