const cutomer = require("../models/customer");
const express = require("express");
const app = express();
const loginRouter = require("./loginRoute/loginRoute");

const router = express.Router();

router.get("/cutomers", async (req, res) => {});

router.get("/cutomer/:id", async (req, res) => {});

app.use("/cutomer",loginRouter);
