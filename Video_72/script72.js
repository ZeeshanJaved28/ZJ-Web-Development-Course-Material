console.log("JavaScript Exercise 12 - Solution");

// let rand = Math.random();
// console.log(rand.toFixed(2));
// if (rand < 0.33) {
//   document.querySelectorAll(".box").forEach((e) => {
//     e.style.backgroundColor = "red";
//     e.style.color = "black";
//   });
// } else if (rand > 0.33 && rand < 0.66) {
//   document.querySelectorAll(".box").forEach((e) => {
//     e.style.backgroundColor = "green";
//     e.style.color = "white";
//   });
// } else {
//   document.querySelectorAll(".box").forEach((e) => {
//     e.style.backgroundColor = "blue";
//     e.style.color = "red";
//   });
// }

// let rand2 = Math.random();
// console.log(rand.toFixed(2));
// if (rand2 < 0.33) {
//   document.querySelectorAll("#box1").forEach((e) => {
//     e.style.backgroundColor = "grey";
//     e.style.color = "white";
//   });
// } else if (rand2 > 0.33 && rand2 < 0.66) {
//   document.querySelectorAll("#box2").forEach((e) => {
//     e.style.backgroundColor = "purple";
//     e.style.color = "yellow";
//   });
// } else {
//   document.querySelectorAll("#box3").forEach((e) => {
//     e.style.backgroundColor = "black";
//     e.style.color = "white";
//   });
// }

// let boxes = document.getElementsByClassName(".box");
let boxes = document.querySelector(".container").children;
// console.log(boxes);

function getRandomColor() {
  //   let val1 = 233;
  //   let val2 = 124;
  //   let val3 = 111;
  //   Hint: a + r (b-a)
  //   a = 0
  //   r = random number
  //   b = 255
  //   Math.ceil(4.22) => 5
  //   Formula: Math.ceil(0 + Math.random() * 255)
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1},${val2},${val3})`;
}

Array.from(boxes).forEach((e) => {
  //   console.log(e);
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
});
