//express routing
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("dev"));

/// here it is a custom middleware
app.use((req, res, next) => {
  console.log("Hello from Middleware");
  next();
});

// middle ware to check the time when a request is made
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.get("/", (req, res) => {
  res.status(200).send({ message: "This is a get resquest", status: "ok" });
  console.log(`This request is made at ${req.requestTime}`);
});
app.post("/", (req, res) => {
  res.status(404).send("This is a post request");
});

app.listen(port, () => {
  console.log(`The server has started on port ${port}`);
});
