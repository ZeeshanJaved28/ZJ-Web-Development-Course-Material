console.log("Exercise 16 - Solution");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const employee = require("./models/employee");

mongoose.connect("mongodb://127.0.0.1:27017/company");
const port = 3000;

app.set("view engine", "ejs");

const getRandom = (arr) => {
  let rand = Math.floor(Math.random()) * (arr.length - 1);
  return arr[rand];
};

app.get("/", (req, res) => {
  res.render("index99", { foo: "FOO" });
});
app.get("/generate", async (req, res) => {
  // Clear the collection employee
  await employee.deleteMany({});
  // Generate random data
  let randNames = ["Shani", "Ajaz", "Shahbaz", "Asad", "Zubair"];
  let randLanguages = ["Python", "JavaScript", "HTML", "CSS", "Java"];
  let randCities = ["Khi", "Lhr", "Isl", "Fsd", "Rwp"];
  for (let index = 0; index < 10; index++) {
    let e = await employee.create({
      name: getRandom(randNames),
      salary: Math.floor(Math.random() * 50000),
      language: getRandom(randLanguages),
      city: getRandom(randCities),
      isManager: Math.random() > 0.5 ? true : false,
    });
    console.log(e);
    // await e.save();
  }
  res.render("index99", { foo: "FOO" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
