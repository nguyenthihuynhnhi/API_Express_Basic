const todoService = require("../services/todoService");

const getListTodo = (req, res) => {
  const resultTodoService = todoService.getListTodo();
  res.status(200).json(resultTodoService);
};

const createTodo = (req, res) => {
  const resultTodoService = todoService.createTodo(req.body);
  res.status(200).json(resultTodoService);
};

module.exports = {
  getListTodo,
  createTodo
};
