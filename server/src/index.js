const express = require("express");
const rootRouter = require("./routes");

const app = express();

app.use(rootRouter);

const server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
