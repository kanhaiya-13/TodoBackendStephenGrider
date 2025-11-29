const express = require("express");
const app = express();
const port = 3000;
const connection = require("./db");
const todoRoute = require("./routes/todoRoute");
const bodyParser = require("body-parser");
const customerRoute = require("./routes/customerRoute");
const loginRoute = require("./routes/loginRoute/loginRoute");

app.use(bodyParser.json());

app.get("/app/v1", (req, res) => {
  return res.json({ message: "everything working fine" });
});

app.use("/app/v1", todoRoute);
app.use("/app/v1", customerRoute);
app.use("/app/v1", loginRoute);

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
