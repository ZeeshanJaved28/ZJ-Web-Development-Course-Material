console.log("Event Bubbling");

// so the first argument is click of add event listener.

// document.querySelector(".child").addEventListener("click", () => {
//     alert("Child was clicked");
//   });
// document.querySelector(".childContainer").addEventListener("click", () => {
//     alert("childContainer was clicked");
//   });
// document.querySelector(".container").addEventListener("click", () => {
//     alert("container was clicked");
//   });

document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Child was clicked");
});
document.querySelector(".childContainer").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("childContainer was clicked");
});
document.querySelector(".container").addEventListener("click", (e) => {
  alert("container was clicked");
});

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

// setInterval(() => {
//   document.querySelector(".childContainer").style.backgroundColor = getRandomColor();
// }, 3000); // Every 3 seconds that whatever is happening inside it.

// let a = setInterval(() => {
//   document.querySelector(".childContainer").style.backgroundColor = getRandomColor();
// }, 1000); // Every 1 seconds that whatever is happening inside it.
// console.log(a);

// clearInterval(1); // the set interval will stop running.

// why are you making a copy i am making a copy because syntax is same i will say exactly same, this is setTimeout.

// setTimeout runs only once after a certain period of time

let b = setTimeout(() => {
  document.querySelector(".childContainer").style.backgroundColor =
    getRandomColor();
}, 5000); // Every 5 seconds that whatever is happening inside it.
console.log(b);

clearTimeout(1);
