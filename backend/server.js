const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use(function (req, res, next) {
//   next();
// });

const users = [];

app.get("/api/customers", (req, res) => {
  console.log(req.method);
  console.log(req.params);
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" },
  ];

  res.json(customers);
});

app.post("/v1/users", (req, res) => {
  console.log(req.method);
  console.log(req.body);

  users.push({
    id: 1,
    name: req.params.name,
    password: req.params.password,
  });

  res.status(200).json({});
});

app.get("/v1/users/:id", (req, res) => {
  console.log(req.params);
  console.log(req.query);

  res.status(200).json({});
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
