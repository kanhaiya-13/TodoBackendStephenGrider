const express = require("express");
const app = express();
const port = 3000;
const connection = require("./db");
const bodyParser = require("body-parser");
const routers = require("./routes/routers");

app.use(bodyParser.json());

app.get("/app/v1", (req, res) => {
  return res.json({ message: "everything working fine" });
});

app.use("/app/v1", routers);

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
