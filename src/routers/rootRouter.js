const todoRouter = require("./todoRouter");
const userRouter = require("./userRouter");

const express = require("express");
const router = express.Router();

router.use("/todo", todoRouter);
router.use(userRouter);

module.exports = router;
