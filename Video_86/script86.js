console.log("CommonJs Vs EcmaScript Modules");

// const { createServer } = require('node:http'); //CommonJS
// import { createServer } from "http";

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   //   res.setHeader('Content-Type', 'text/plain');
//   res.setHeader("Content-Type", "text/html");
//   //   res.end('Hello World');
//   res.end("<h1>Hello World</h1>");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// import { a , b , d} from "./main.js";
// console.log(a,b,d);
// named export

// import obj from "./main.js"
// console.log(obj);

// import Zee from "./main.js"
// console.log(Zee);

const a = require("./main2.js");
console.log(a, __dirname, __filename);
