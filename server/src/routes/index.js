const Router = require("express").Router();
const testRouter = require("./test");

Router.use("/test", testRouter);

module.exports = Router;
