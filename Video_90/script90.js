console.log("Middlewares in Express Js");

const express = require("express");
const app = express();
const port = 3000;
const blog = require("./routes/blog90");
const fs = require("fs");

app.use("/blog", blog);

// app.use(express.static("public")); // First Request and then Reponse [In public folder (.txt) file]

// Writing Middleware
// const myLogger = function (req, res, next) {
//     console.log('LOGGED')
//     next()
//   }

//   app.use(myLogger)

// Middleware 01: - Logger for our application

// app.use((req, res, next) => {
//   console.log("m1");
//   res.send("Hacked by Middleware 01")
// //   next();
// });

// app.use((req, res, next) => {
//   console.log("m1");
// //   res.send("Hacked by Middleware 01")
//   next();
// });

// app.use((req, res, next) => {
//     // fs.writeFileSync("logs.txt", `${Date.now()} is a ${req.method}/n`)
//     fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
//   console.log(`${Date.now()} is a ${req.method}`);
//   //   res.send("Hacked by Middleware 01")
//   next();
// });

app.use((req, res, next) => {
  console.log(req.headers);
  req.shani = "I'm Shani Bhai";

  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`);
  console.log(`${Date.now()} is a ${req.method}`);
  //   res.send("Hacked by Middleware 01")
  next();
});

// Middleware 02:
app.use((req, res, next) => {
  console.log("m2");
  req.shani = "I'm Zeeshan Bhai";
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("Hello About!" + req.shani);
});
app.get("/contact", (req, res) => {
  res.send("Hello Contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
