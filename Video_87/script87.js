// console.log("Working with Files: fs and path Modules");

// const fs = require("fs");
// OR
// const fs = require("fs/promises");
// // console.log(fs);

// console.log("starting");

// fs.writeFileSync("Shani87.txt", "Shani is a good boy.");

// // console.log("ending");

// fs.writeFile("Shani87_2.txt", "Shani is a good boy 2", () => {
//   console.log("done");
//   fs.readFile("Shani87_2.txt", (error, data) => {
//     console.log(error, data.toString());
//     //Callback Hell occured when you re-write or re-read files.
//     // again
//   });
// });

// // console.log("ending");

// fs.appendFile(
//   "Shani87.txt",
//   " And he is brave like a lion.",
//   (e, d) => {
//     console.log(d);
//   }
// );

// console.log("ending");

console.log("About Path");

import path from "path";
let myPath = "D:\\Sigma Web Development Course\\Video_87\\V87.txt";
console.log(path.extname(myPath)); // extension

console.log(path.dirname(myPath)); // directory

console.log(path.basename(myPath)); // file name

console.log("D:/", "Sigma Web Development Course\\Video87");
