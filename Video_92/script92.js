console.log("ejs Template Engine in Express");

const express = require("express");
const app = express();
const port = 3000;

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  let siteName = "Adidas";
  let searchText = "Search Now";
  let arr = ["Facilities", 23, 54];
  //   res.sendFile("templates/index92.html", { root: __dirname });
  res.render("index92", { siteName: siteName, searchText: searchText, arr });
});
app.get("/blog/:slug", (req, res) => {
  let blogTitle = "Adidas why and when";
  let blogContent = "Its an amazing brand";
  res.render("blogpost", { blogTitle: blogTitle, blogContent: blogContent });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
