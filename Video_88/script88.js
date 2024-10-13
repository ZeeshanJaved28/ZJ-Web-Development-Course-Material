// console.log("Introduction to Express Js");

// const { createServer } = require("node:http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
// //   res.setHeader("Content-Type", "text/plain");
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>ExpressJS</h1>");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require("express"); //import
const app = express(); // app define
const port = 3000;

app.use(express.static("public"));

// app.get or app.post or app.put or app.delete(path, handler)
app.get("/", (req, res) => {
  res.send("Hello World2!");
}); //Handler
app.get("/about", (req, res) => {
  res.send("About Us");
});
app.get("/contact", (req, res) => {
  res.send("Hello Contact me!");
});
app.get("/blog", (req, res) => {
  res.send("Hello Blog!");
});
// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db
//   res.send('Hello intro to js!')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to python from the db
//   res.send('Hello intro to python!')
// })
// // Number of lines of code are bad smell and not maintainable code

app.get("/blog/:slug", (req, res) => {
  // logic to fetch {slug} from the db
  // console.log(req);
  // For URL: http://localhost:3000/blog/Zeeshan-Shani?mode=dark&region=pk
  console.log(req.params); // will output params: { slug: 'Zeeshan-Shani' },
  console.log(req.query); // will output query: { mode: 'dark', region: 'pk' }
  res.send(`Hello ${req.params.slug}!`);
}); // http://127.0.0.1:3000/blog/Zeeshan-Shani

// app.get("/blog/:slug/:slug2", (req, res) => {
//   // logic to fetch {slug} and {slug2} from the db
//   res.send(`Hello ${req.params.slug}! and Welcome ${req.params.slug2}`);
// }); // http://127.0.0.1:3000/blog/Zeeshan-Shani/Intro-To-ExpressJS

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
