const Router = require("express").Router();
const { helloWorld } = require("../controllers/test");

Router.get("/", helloWorld);

module.exports = Router;
