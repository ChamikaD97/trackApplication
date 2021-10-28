import Router from "express";
import connection from "../db.js";

const Expence = Router();

Expence.post("/addExpence", async (req, res) => {
  const date = req.body.date;
  const description = req.body.description;
  const amount = req.body.amount;
  const type = req.body.type;

  connection.query(
    `INSERT INTO expences (date	,description,amount,type) VALUES (?,?,?,?)`,
    [date, description, amount, type],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send({
          data: result,
          msg: "Successfully Saved.",
        });
      }
    }
  );
});

Expence.post("/updateExpence", async (req, res) => {
  const id = req.body.id;
  const date = req.body.date;
  const description = req.body.description;
  const amount = req.body.amount;
  const type = req.body.type;
  connection.query(
    "UPDATE expences SET type = ?, description = ? ,date = ?, Amount = ? WHERE id = ?;",
    [type, description, date, amount, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send({
          data: result,
          msg: "Successfully Saved.",
        });
      }
    }
  );
});

Expence.post("/updateMax", async (req, res) => {
  const date = req.body.date;
  const oldMax = req.body.maxOld;
  const newMax = req.body.newMax;

  connection.query(
    `INSERT INTO maxexpence (updatedOn,oldValue,newValue) VALUES (?,?,?)`,
    [date, oldMax, newMax],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send({
          data: result,
          msg: "Successfully Saved.",
        });
      }
    }
  );
});

Expence.post("/getMax", (req, res) => {
  connection.query(
    "SELECT newValue FROM `maxexpence`  ORDER BY `maxexpence`.`id` DESC limit 1",
    (error, result) => {
      if (error) console.log(error);
      else {
        res.send(result);
      }
    }
  );
});

Expence.post("/deleteExpence", (req, res) => {
  const id = req.body.id;

  connection.query(
    "delete from expences where id =" + id,
    (error, result) => {
      if (error) console.log(error);
      else {
        res.send(result);
      }
    }
  );
});

Expence.post("/getAllExpences", (req, res) => {
  connection.query(
    "SELECT * FROM `expences` ORDER BY `expences`.`date` DESC    ",
    (error, result) => {
      if (error) console.log(error);
      else {
        res.send(result);
      }
    }
  );
});

Expence.post("/getTotal", (req, res) => {
  connection.query(
    "SELECT SUM(Amount) AS total FROM expences;",
    (error, result) => {
      if (error) console.log(error);
      else {
        res.send(result);
      }
    }
  );
});

Expence.post("/getRecentMaxLastYear", (req, res) => {
  const year = req.body.year;

  connection.query(
    "SELECT * FROM `expences` WHERE date like '%'  ORDER BY `expences`.`Amount` DESC LIMIT 1;",
    (error, result) => {
      if (error) console.log(error);
      else {
        res.send(result);
      }
    }
  );
});

Expence.post("/pieChartData", (req, res) => {
  const month = req.body.month;

  connection.query(
    "select SUM(Amount) as amount ,type from expences where date like '" +
      month +
      "%' group by type ORDER BY `amount`;",
    (error, result) => {
      if (error) console.log(error);
      else {
        res.send(result);
      }
    }
  );
});

Expence.post("/lineChartData", (req, res) => {
  const month = req.body.month;

  connection.query(
    "SELECT * FROM `maxexpence` ORDER BY `maxexpence`.`id` ASC",
    (error, result) => {
      if (error) console.log(error);
      else {
        res.send(result);
      }
    }
  );
});

Expence.post("/getUsedValues", (req, res) => {

  connection.query(
    "SELECT SUM(Amount) As used FROM `expences` WHERE date like '2021-10-%'  ORDER BY `expences`.`Amount`;",
    (error, result) => {
      if (error) console.log(error);
      else {
        res.send(result);
      }
    }
  );
});

Expence.post("/MaxCategery", (req, res) => {
  connection.query(
    "select SUM(Amount) as amount ,type from expences group by type  ORDER BY `amount`  DESC LIMIT 1;",
    (error, result) => {
      if (error) console.log(error);
      else {
        res.send(result);
      }
    }
  );
});

Expence.post("/getCurrentValue", (req, res) => {
  connection.query(
    "SELECT * FROM `maxexpence` ORDER BY `maxexpence`.`id` DESC LIMIT 1;",
    (error, result) => {
      if (error) console.log(error);
      else {
        res.send(result);
      }
    }
  );
});

Expence.post("/getExpenceToEdit", (req, res) => {
  const id = req.body.id;
  connection.query(
    "SELECT * FROM `expences` where id=" + id,
    (error, result) => {
      if (error) console.log(error);
      else {
        res.send(result);
      }
    }
  );
});

Expence.post("/getFilteredData", (req, res) => {
  let fromDate = req.body.fromDate;
  let toDate = req.body.toDate;
  const description = req.body.description;
  const amount = req.body.amount;
  const type = req.body.type;
  if (fromDate == "") {
    fromDate = "0000-01-01";
  }
  if (toDate == "") {
    toDate = "9999-12-31";
  }
  console.log(fromDate);
  console.log(toDate);

  const sql =
    "SELECT * FROM `expences` where date BETWEEN '" +
    fromDate +
    "' and '" +
    toDate +
    "' and Amount >= '" +
    amount +
    "%' And type like  '" +
    type +
    "%' And description like '" +
    description +
    "%' ORDER BY `expences`.`date` DESC ";

  connection.query(sql, (error, result) => {
    if (error) console.log(error);
    else {
      res.send(result);
    }
  });
});

export default Expence;
