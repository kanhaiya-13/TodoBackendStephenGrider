const express = require("express");
const app = express();
const port = 3000;

app.get("/app/v1", (req, res) => {
  return res.json({ message: "everything working fine" });
});

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
