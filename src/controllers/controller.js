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

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into customer set ?", [data], (err, rows) => {
      if (err) {
        res.json(err);
      }
      res.redirect("/");
    });
  });
};

controller.delete = (req, res) => {
  const id = req.params.id_customer;
  req.getConnection((err, conn) => {
    conn.query(
      "delete from customer where id_customer = ?",
      [id],
      (err, rows) => {
        if (err) {
          res.json(err);
        }
        res.redirect("/");
      }
    );
  });
};

//export the controller
module.exports = controller;
