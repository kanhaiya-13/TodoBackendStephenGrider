const express = require("express");
const app = express();
const { todo } = require("../models/todo");

const router = express.Router();

router.get("/todos", async (req, res) => {
  const newTodo = new todo({
    title: "xyz",
    priority: "Medium",
  });
  const response1 = await newTodo.save();
  const response = await todo.find({});
  return res.json({ mess: "hi there", response });
});

module.exports = router;
