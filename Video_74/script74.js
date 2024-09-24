console.log("Events, Event Bubbling, setInterval & setTimeout in JS");
// Lists of all Mouse Events:
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// Lists of all Keyboard Events:
// https://developer.mozilla.org/en-US/docs/Web/API/Element#keyboard_events
let button = document.getElementById("btn");

// button.addEventListener("click", () => {
// //   alert("I was clicked. Yayy!!");
// document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
// });

button.addEventListener("dblclick", () => {
  document.querySelector(".box").innerHTML =
    "<b>Yayy you were clicked</b> Enjoy your click!";
});

button.addEventListener("contextmenu", () => {
  alert("Don't hack us by Right clicked Please");
});

// button.addEventListener("keydown", (e) => {
//   console.log(e);
// });

document.addEventListener("keydown", (e) => {
  console.log(e, e.key, e.keyCode);
  // Now see this key code is cut and this property is deprecated which means we don't want to use it
  // we want to use key only, we don't have to use the key code.
});
 