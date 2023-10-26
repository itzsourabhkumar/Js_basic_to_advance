const express = require("express");

const app = express();

const logger = (req, res, next) => {
  console.log(req.url);
  next();
};

const logger1 = (req, res, next) => {
  console.log("query parama are ", req.params);
  next();
};

const logger2 = (req, res, next) => {
  console.log("request type is ", req.method);
  next();
};

app.use(logger1,logger2);

// app.use("/request-type", (req, res, next) => {
//   console.log("request type is ", req.method);
//   next();
// });

// app.use(express.static(__dirname+'/views'));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.send("Express server setup");
});

app.get("/home", logger, (req, res) => {
  res.send("Homepage");
});

app.post("/help", (req, res) => {
  res.send("help page");
});

app.get("/request-type", (req, res) => {
  res.send("done");
});

app.get("/serving", (req, res) => {
  res.render("index");
});

app.get("/blog/:blogid", logger1 ,(req, res) => {
  console.log("params: ", req.params);
  res.send("blogs");
});

app.listen(3000, () => {
  console.log("server started");
});
