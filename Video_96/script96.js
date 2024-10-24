console.log("Installing Mongoose & Using it with Express");

// https://www.npmjs.com/package/mongodb

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    
  //   const todo = new Todo({
  //     title: "Hey First Todo",
  //     desc: "Description of this Todo",
  //     isDone: false,
  //   });

  //   const todo = new Todo({
  //     title: 1,
  //     desc: "Description of this Todo",
  //     isDone: false,
  //     days: 3,
  //   }); Correct

  //   const todo = new Todo({
  //     title: 1,
  //     desc: "Description of this Todo",
  //     isDone: false,
  //     days: "Shani",
  //   }); Wrong

  //   const todo = new Todo({
  //     title: 1,
  //     desc: "Description of this Todo",
  //     isDone: false,
  //     days: 6,
  //   }); // Correct

//   const todo = new Todo({
//     title: 1,
//     desc: "Description of this Todo",
//     isDone: false,
//     days: Math.floor(Math.random() * 45 + 5 * Math.random()),
//   });
  const todo = new Todo({
    desc: "Description of this Todo",
    isDone: false,
    days: Math.floor(Math.random() * 45 + 5 * Math.random()),
  });
  todo.save();
  res.send("Hello World!");
});

app.get("/a", async (req, res) => {
  let todo = await Todo.findOne({});
  console.log(todo);
  
  res.json({
    title: todo.title,
    desc: todo.desc,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
