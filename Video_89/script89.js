console.log("Response, Request and Routers in Express");

const express = require("express");
const blog = require('./routes/blog89')
const shop = require('./routes/shop89')
const app = express();
const port = 3000;

app.use(express.static("public")); // Middleware
app.use('/blog', blog)
app.use('/shop', shop)

// app.get("/", (req, res) => {
//   console.log("Hey its a get request");
//   res.send("Hello World2!");
// });

// app.post("/", (req, res) => {
//   console.log("Hey its a post request");
//   res.send("Hello World post!");
// });
// app.put("/", (req, res) => {
//   console.log("Hey its a put request");
//   res.send("Hello World put!");
// });
// app.delete("/", (req, res) => {
//   console.log("Hey its a delete request");
//   res.send("Hello World delete!");
// });

// app.get("/", (req, res) => {
//     console.log("Hey its a get request");
//     res.send("Hello World2!");
//   }).post("/", (req, res) => {
//     console.log("Hey its a post request");
//     res.send("Hello World post!");
//   }).put("/", (req, res) => {
//     console.log("Hey its a put request");
//     res.send("Hello World put!");
//   }).delete("/", (req, res) => {
//     console.log("Hey its a delete request");
//     res.send("Hello World delete!");
//   }); // Chaining of requests

// app.get("/template89", (req, res) => {
//   console.log("Hey its template");
// //   res.send("Hello World Template!"); // For text
//   res.sendFile("template/template89.html", {root: __dirname}); // For file
// });

// app.get("/api", (req, res) => {
//   res.json({ a: 1, b: 2, c: 3, d: 4, name: ["Zeeshan", "Javed"]});
// });

// Postman Desktop App
app.get("/", (req, res) => {
  console.log("Hey its a get request");
  res.send("Hello World21!");
});
app.post("/", (req, res) => {
  console.log("Hey its a post request");
  res.send("Hello World post!");
});
app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, name: ["Zeeshan", "Javed"]});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
