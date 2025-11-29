const express = require("express");
const router = express.Router();
const cutomerRouter = require("./customerRouter/customerRoute");
const todoRouter = require("./todoRouter/todoRouter");
const loginRouter = require("./loginRoute/loginRoute");

router.use("/", cutomerRouter);
router.use("/", todoRouter);
router.use("/", loginRouter);

module.exports = router;
