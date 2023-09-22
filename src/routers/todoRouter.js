const express = require("express");
const router = express.Router();
const todoController = require("../controlers/todoController");


router.get("/getListTodo", todoController.getListTodo);
router.post("/createTodo", todoController.createTodo);

module.exports = router;
