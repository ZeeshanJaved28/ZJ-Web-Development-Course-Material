console.log("JavaScript - Selecting by Ids, Classes, and More");

// let box = document.body.getElementsByClassName("box");
// console.log(box);

// box[2].style.backgroundColor = "red";

// document.getElementById("redbox").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "green";

// document.querySelectorAll(".box").style.backgroundColor = "green"; // Wrong Statement

// document.querySelectorAll(".box").forEach((e) => {
//     // console.log(e)
//     e.style.backgroundColor = "green"
// });

// console.log(document.getElementsByTagName("div"));

// let e = document.getElementsByTagName("div");
// console.log(e[4].matches("#redbox"));
// console.log(e[3].matches("#redbox"));


// let e = document.getElementsByTagName("div");
// console.log(e[3].closest("#redbox"));
// console.log(e[3].closest(".container"));
// console.log(e[3].closest("html"));

let e = document.getElementsByTagName("div");
console.log(document.querySelector(".container").contains(e[2]));
console.log(document.querySelector(".container").contains(e[0]));
// Output: true
console.log(document.querySelector(".container").contains(document.querySelector("body")));
//Output: false
console.log(document.querySelector("body").contains(document.querySelector(".container")));
// Output: true