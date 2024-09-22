console.log("Inserting and Removing Elements using JavaScript");

console.log(document.querySelector(".box"));
console.log(document.querySelector(".container"));

console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".container").innerHTML);

console.log(document.querySelector(".box").innerText);
console.log(document.querySelector(".container").innerText);

console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".box").outerHTML);

console.log(document.querySelector(".container").outerText);
console.log(document.querySelector(".box").outerText);

console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".container").nodeName);

console.log(document.querySelector(".container").textContent);
console.log(document.querySelector(".box").textContent);

// console.log(document.querySelector(".container").hidden);
// console.log(document.querySelector(".container").hidden="true");

console.log((document.querySelector(".box").innerHTML = "Hey I am Shani"));

console.log(document.querySelector(".box").hasAttribute("style"));

console.log(document.querySelector(".box").getAttribute("style"));

console.log(
  document.querySelector(".box").setAttribute("style", "display:inline")
);

console.log(document.querySelector(".box").attributes);

console.log(document.querySelector(".box").removeAttribute("style"));

console.log((document.designMode = "on"));
console.log((document.designMode = "off"));

console.log(document.querySelector(".box").dataset);

// console.log(document.querySelector(".box").remove());

console.log(document.querySelector(".container").classList);
console.log(document.querySelector(".container").className);

// console.log(document.querySelector(".container").classList.add("SHA256"));
// console.log(document.querySelector(".container").classList.remove("SHA256"));
// console.log(document.querySelector(".container").classList.remove("red"));
// console.log(document.querySelector(".container").classList.add("red"));

console.log(document.querySelector(".container").classList.toggle("red"));
console.log(document.querySelector(".container").classList.toggle("red"));
